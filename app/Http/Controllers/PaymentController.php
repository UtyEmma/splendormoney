<?php

namespace App\Http\Controllers;

use App\Http\Services\PaymentService;
use App\Http\Services\TransactionService;
use App\Library\Arr;
use App\Library\Number;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaymentController extends Controller {
    

    function initiate(Request $request){
        $request->validate([
            'courses' => 'array',
            'course.*' => 'required|exists:courses,id'
        ]);

        $user = Auth::user();

        $courses = Course::whereIn('id', $request->courses)->get();

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
