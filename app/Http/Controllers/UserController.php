<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller {
    

    function index(Request $request){
        $users = User::users()
                        ->withCount(['enrollments', 'referrals'])
                        ->withSum('transactions', 'amount');
                        
        $users->when($request->filter, function($query, $filter){
            if($filter === 'enrolled') $query->has('enrollments');
            if($filter === 'notenrolled') $query->doesntHave('enrollments');
        });

        $users->when($request->search, function($query, $search){
            $query->where('name', 'LIKE', "%$search%")->orWhere('email', 'LIKE', "%$search%");
        });

        return Inertia::render('Admin/Users/Users', [
            'users' => $users->paginate(env('PAGINATION_COUNT'))
        ]);
    }
}
