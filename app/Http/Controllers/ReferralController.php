<?php

namespace App\Http\Controllers;

use App\Models\Referral;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReferralController extends Controller {
    
    function index(){
        $user_id = auth()->id();
        $referrals = User::find($user_id)->downlines;

        return Inertia::render('Student/Referrals', [
            'referrals' => $referrals
        ]);
    }

    function list(){
        $referrals = Referral::all();
        return Inertia::render('Admin/Referrals/Referrals', [
            'referrals' => $referrals
        ]);
    }


}
