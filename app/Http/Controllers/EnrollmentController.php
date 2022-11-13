<?php

namespace App\Http\Controllers;

use App\Http\Services\EnrollmentService;
use App\Http\Services\PaymentService;
use App\Http\Services\TransactionService;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EnrollmentController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $user_id = Auth::id();
        $enrolled_courses = User::find($user_id)->enrollments()->with(['course.modules.lectures', 'course.instructor'])->get(); 
        
        return Inertia::render('Student/EnrolledCourses', [
            'enrollments' => $enrolled_courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function store(Request $request) {
        $transaction = Transaction::where('reference', $request->reference)->first();

        $payment = PaymentService::verify($transaction, $request->flutterwave_id); // Check Payment Status
        
        if($payment['status'] !== 'successful') return back()->with('error', "The Payment Was not Completed"); //Return Error if payment not completed
        if($payment['amount'] !== $transaction->amount) return back()->with('error', "The Transaction amount was invalid. Please contact Support");
        
        TransactionService::complete($transaction); // Complete the transaction
        
        $courses = Course::findMany($transaction->courses); // Fetch the courses from the transaction
        
        EnrollmentService::createMany($transaction, $courses->toArray()); // Enroll the User for all Courses purchased
        
        return back()->with('Enrollment Completed Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Enrollment  $enrollment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Enrollment $enrollment, $course) {
        $user_id = Auth::id();

        if($enrollment->student_id !== $user_id) return back()->with('error', 'You are not enrolled for this course');
        $course = $enrollment->course()->with(['modules.lectures', 'instructor'])->first();

        return Storage::get('course-files/inertia.text');
        dd(Storage::get('course-files/inertia.text'));
        return Inertia::render('Student/CourseView', [
            'course' => $course
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Enrollment  $enrollment
     * @return \Illuminate\Http\Response
     */
    public function edit(Enrollment $enrollment) { 
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Enrollment  $enrollment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Enrollment $enrollment) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Enrollment  $enrollment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Enrollment $enrollment)
    {
        //
    }
}
