<?php

namespace App\Http\Controllers;

use App\Http\Services\PaymentService;
use App\Http\Services\TransactionService;
use App\Library\Arr;
use App\Library\Number;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaymentController extends Controller {
    

    function initiate(Request $request){
        $request->validate([
            'courses' => 'array',
            'courses.*' => 'required|exists:courses,id'
        ]);

        $user = Auth::user();

        $courses = Course::whereIn('id', $request->courses)->get();

        $enrollments = Enrollment::whereIn('course_id', $request->courses)->with(['course'])->where('student_id', $user->id)->get();

        if($enrollments->count()){
            $message = $enrollments->count() === 1  ? "You are already enrolled for ".$enrollments[0]->course->name : "You are already enrolled for ".$enrollments[0]->course->name."and ".($enrollments->count() - 1)." other courses"; 

            return back()->with('error', "$message");
        }


        $amount = array_sum(array_map(function($course){
            return Number::percentageDifference($course['discount'], $course['price']);
        }, $courses->toArray()));
    
        $transaction = TransactionService::create($user, $request->courses, $amount);
        $data =  PaymentService::initiate($transaction, $user);

        return back()->with('details', $data);
    }

    function cart(){
        Inertia::share('details', session()->get('details'));
        return Inertia::render('Cart');
    }



}
