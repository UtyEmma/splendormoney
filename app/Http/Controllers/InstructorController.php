<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Library\FileHandler;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class InstructorController extends Controller {
    
    function index(){

    }

    function list() {
        $instructors = User::instructors()->withCount(['courses', 'students'])->withSum('students', 'amount')->paginate(env('PAGINATION_COUNT'));

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
        
        return redirect()->back()->with('success', "Instructor Created Successfully");
    }

    function edit(User $user){
        return Inertia::render('Admin/Instructors/EditInstructor', [
            'instructor' => $user
        ]);
    }

    function update(Request $request, User $user){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ["required", "string", "email", "max:255", Rule::unique('users', 'email')->ignore($user->id)],
            'password' => ['nullable', Password::defaults(), 'confirmed'],
            'description' => 'nullable|string',
            'avatar' => 'nullable|image',
            'status' => 'required|string|in:active,inactive'
        ]);
        
        $avatar = $request->hasFile('avatar') ? FileHandler::upload($request->file('avatar')) : $user->avatar;
        $password = $request->filled('password') ? Hash::make($request->password) : $user->password;

        $user->update(collect($validated)->merge([
            'avatar' => $avatar,
            'password' => $password
        ])->all());

        return redirect()->back()->with('success', 'Instructor Updated Successfully');
    }

    function destroy(User $user){
        $admin = User::superAdmin()->first();
        
        Course::where('instructor', $user->id)->update([
            'instructor' => $admin->id
        ]); // Reasign instructors to the Course (The new Instructor will be the Super admin)

        $user->delete();

        return redirect()->back()->with('success', 'Instructor Deleted Successfully');
    }



}
