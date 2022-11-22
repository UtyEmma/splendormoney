<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Library\FileHandler;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class StudentController extends Controller {
    
    function dashboard(){
        $user_id = auth()->id();    
        $user = User::where('id', $user_id)->withCount(['enrollments', 'transactions', 'referrals'])->first();
    
        return Inertia::render('Student/StudentOverview', [
            'user' => $user
        ]);
    }

    function profile(){
        return Inertia::render('Student/Profile');
    }

    function reviews(){
        $user = auth()->user();
        $reviews = Review::where('student_id', $user->id)->with(['course.instructor'])->paginate(env('PAGINATION_COUNT'));

        return Inertia::render('Student/Reviews', [
            'reviews' => $reviews
        ]);
    }

    function refferals(){
        $user_id = auth()->id();
        $referrals = User::find($user_id)
                            ->downlines()
                            ->withCount(['enrollments'])
                            ->withSum('transactions', 'amount')
                            ->paginate(env('PAGINATION_COUNT'));
        
        return Inertia::render("Student/Referrals", [
            'referrals' => $referrals
        ]);
    }

    function update(UpdateUserRequest $request, User $user){
        if( $request->filled('password') && 
            !Auth::attempt($request->only([
                'email' => $request->email, 
                'password' => $request->oldpassword 
            ]))
        )  return back()->with([
            'errors' => [
                'password' => "Incorrect Password Provided"
            ]
        ]);

        $password = $request->filled('password') ? Hash::make($request->password) : $user->password;
        $avatar = $request->hasFile('avatar') ? FileHandler::upload($request->file('avatar')) : $user->avatar;

        $user->update($request->safe()->merge([
            'password' => $password,
            'avatar' => $avatar
        ])->all());

        back()->with('success', 'Profile Updated Successfully');
    }


}
