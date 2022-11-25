<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Library\FileHandler;
use App\Library\Response;
use App\Library\Str;
use App\Models\Category;
use App\Models\Enrollment;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){
        $courses = Course::withRelations()->active();

        $courses->when($request->input('keyword'), function($query, $keyword){
            $query->where("name", "LIKE", "%$keyword%");
        });

        return Inertia::render('Courses/Courses', [
            'courses' => $courses->paginate(env(16))
        ]);
    }

    /**
     * Fetch Courses
     */
    function list(){
        $courses = Course::with(['enrollments', 'enrollments.student', 'transactions'])->withCount([
            'enrollments' , 'transactions', 'lectures'])->withSum('transactions', 'amount')->withSum('lectures as course_duration', 'duration')->paginate(env('PAGINATION_COUNT'));
        
        return Inertia::render('Admin/Courses/AdminCourses', [
            'courses' => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        $instructors = User::instructors()->get();

        Inertia::share('course', Session::get('course'));
        $categories = Category::all();

        return Inertia::render('Admin/Courses/CreateCourse', [
            'instructors' => $instructors,
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCourseRequest $request) {
        $image = $request->hasFile('image') ? FileHandler::upload($request->file('image')) : '';

        $course = Course::create($request->safe()->merge([
            'image' => $image,
            'slug' => Str::slug($request->name)
        ])->toArray());

        $course = Course::withRelations()->find($course->id);

        return back()->with('course', $course);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show($course) {
        $course = Course::withRelations()->where('slug', $course)->first();

        $enrolled = Enrollment::where([
            'student_id' => Auth::id(),
            'course_id' => $course->id
        ])->first();

        $reviews = Review::where('course_id', $course->id)->with(['student'])->active()->limit(10)->get();

        return Inertia::render('Courses/CourseDetails', [
            'course' => $course,
            'enrolled' => $enrolled,
            'reviews' => $reviews
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit($course) {
        $course = Course::withRelations()->where('slug', $course)->first();
        $instructors = User::instructors()->get();
        $categories = Category::all();
        return Inertia::render('Admin/Courses/EditCourse', [
            'course' => $course,
            'instructors' => $instructors,
            'categories' => $categories
        ]);
    }

    public function status(Request $request, Course $course){
        $request->validate([
            'status' => 'required|in:inactive,pending,active'
        ]);

        $course->status = $request->status;
        $course->save();

        return redirect()->back()->with('success', "Course Updated Successfully");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCourseRequest  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course) {

        $validated = $request->validate([
            "instructor" => ["required", Rule::exists('users', 'id')->where('role', 'instructor')],
            "name" => ["required", "string", "max:255", Rule::unique('courses', 'name')->ignore($course->id)],
            'category' => ['nullable', 'exists:categories,id'],
            "description" => "nullable|string",
            "category" => "nullable|string",
            "image" => "nullable|file|mimetypes:image/*",
            "video" => "nullable|url",
            "price" => "required|numeric",
            "discount" => "nullable|numeric|min:0|max:100",
            'status' => 'required|in:active,inactive,pending'
        ]);

        $image = $request->hasFile('image') ? FileHandler::upload($request->file('image')) : $course->image;

        $course->update(collect($validated)->merge([
            'image' => $image
        ])->toArray());

        $course = Course::withRelations()->find($course->id);
        return back()->with(['course' => $course]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course) {
        $course->delete();
        return redirect()->back()->with('success', 'Course Deleted Successfully');
    }
}
