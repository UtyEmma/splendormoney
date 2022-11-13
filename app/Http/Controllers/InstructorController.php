<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\StoreUserRequest;
use App\Library\FileHandler;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class InstructorController extends Controller {
    
    function index(){

    }

    function list() {
        $instructors = User::instructors()->get();

        return Inertia::render('Admin/Instructors/Instructors', [
            'instructors' => $instructors
        ]);
    }

    function create(){
        return Inertia::render('Admin/Instructors/CreateInstructor');
    }

    function store(StoreUserRequest $request){
        $avatar = $request->hasFile('avatar') ? FileHandler::upload($request->file('avatar')) : null;

        User::create($request->safe()->merge([
            'avatar' => $avatar,
            'role' => 'instructor',
            'password' => Hash::make($request->password)
        ])->all());
        
        return redirect()->back()->with('message', "Instructor Created Successfully");
    }

    function edit(User $user){
        return Inertia::render('Admin/Instructors/EditInstructor', [
            'instructor' => $user
        ]);
    }

    function update(StoreUserRequest $request, User $user){
        $avatar = $request->hasFile('avatar') ? FileHandler::upload($request->file('avatar')) : $user->avatar;
        
        $user->update($request->safe()->merge([
            'avatar' => $avatar
        ])->all());

        return redirect()->back()->with('message', 'Instructor Updated Successfully');
    }

    function delete(User $user){
        $user->delete();
        return redirect()->back()->with('message', 'Instructor Deleted Successfully');
    }



}
