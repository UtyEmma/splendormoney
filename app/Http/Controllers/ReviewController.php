<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Models\Course;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $reviews = Review::with(['course'])->get();
        return Inertia::render('Admin/Reviews/ReviewsList', [
            'reviews' => $reviews
        ]);
    }

    function list(){

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreReviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReviewRequest $request, Course $course) {
        $user = Auth::user();

        if(Review::where('course_id', $request->course_id)->where('student_id', $user->id)->exists()) 
                    return back()->with('error', 'You have aldeady reviewd this Course');

        Review::create($request->safe()->merge([
            'course_id' => $request->course_id,
            'student_id' => $user->id
        ])->toArray());

        return back()->with('success', 'Review Submitted');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReviewRequest  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReviewRequest $request, Review $review) {
        $user_id = Auth::id();
        if($review->student_id !== $user_id) return back()->with('error', 'You are not authorized to carry out this action');
        
        $review->update($request->safe()->toArray());
        return back()->with('success', 'Review Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Review $review) {
        $user = auth()->user();
        if($user->id !== $review->student_id && !User::isAnyAdmin()) return back()->with('error', 'You are not authorized to carry out this action'); 
        $review->delete();
        return back()->with('success', 'Review Deleted Successfully');
    }
}
