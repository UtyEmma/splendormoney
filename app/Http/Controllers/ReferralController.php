<?php

namespace App\Http\Controllers;

use App\Models\Referral;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReferralController extends Controller {
    
    function index(){
        $user_id = auth()->id();
        $referrals = User::find($user_id)->downlines()->withCount(['transactions', 'enrollments'])->withSum('transactions', 'amount')->withSum('referred', 'earnings')->paginate(env('PAGINATION_COUNT'));
        
        $totalEarnings = Referral::where('referrer_id', $user_id)->sum('earning');

        return Inertia::render('Student/Referrals', [
            'referrals' => $referrals,
            'total_earnings' => $totalEarnings
        ]);
    }

}
