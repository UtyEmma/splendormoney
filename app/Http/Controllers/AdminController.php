<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Library\FileHandler;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AdminController extends Controller {

    function dashboard(){
        return Inertia::render('Admin/AdminDashboard', [
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $admins = User::admin()->paginate(env('PAGINATION_COUNT'));
        
        return Inertia::render('Admin/Admins/Admins', [
            'admins' => $admins
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return Inertia::render('Admin/Admins/EditAdmin', [
            'admin' => null,
            'title' => 'New Admin'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request) {
        $avatar = $request->hasFile('avatar') ? FileHandler::upload($request->file('avatar')) : null;

        User::create($request->safe()->merge([
            'avatar' => $avatar,
            'role' => 'admin',
            'password' => Hash::make($request->password)
        ])->all());
        
        return redirect()->back()->with('success', "Admin Created Successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(){
        $user = Auth::user();
        return Inertia::render('Admin/Profile', [
            'admin' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user) {
        return Inertia::render('Admin/Admins/EditAdmin', [
            'admin' => $user,
            'title' => 'Edit Admin'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ["required", "string", "email", "max:255", Rule::unique('users', 'email')->ignore($user->id , 'id')],
            'password' => ['nullable', 'required_with:oldpassword', Password::defaults(), 'confirmed'],
            'description' => 'nullable|string',
            'avatar' => 'nullable|image'
        ]);

        $password = $request->filled('password') ? Hash::make($request->password) : $user->password;
        $avatar = $request->hasFile('avatar') ? FileHandler::upload($request->file('avatar')) : $user->avatar;

        $user->update(collect($validated)->merge([
            'password' => $password,
            'avatar' => $avatar
        ])->all());

        back()->with('success', 'Admin Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user) {
        $admin = auth()->user();
        if(!User::isRole('superadmin', $admin)) return back()->with('error', 'You are not authorized to carry out this action!');

        $user->delete();

        back()->with('success', 'Admin Deleted');
    }
}
