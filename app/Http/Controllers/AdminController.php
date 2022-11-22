<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Library\FileHandler;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
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
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user) {
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user) {
        if(!User::isRole('superadmin', $user)) return back()->with('error', 'You are not authorized to carry out this action!');

        $user->delete();

        back()->with('success', 'Admin Deleted');
    }
}
