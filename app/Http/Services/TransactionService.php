<?php

namespace App\Http\Services;

use App\Library\Number;
use App\Library\Str;
use App\Library\Token;
use App\Models\Referral;
use App\Models\SiteSettings;
use App\Models\Transaction;
use App\Models\User;

class TransactionService {

    static function create(User $user, array $courses, $amount){
        $reference = Token::unique('transactions', 'reference');

        $transaction = Transaction::create([
            'reference' => $reference,
            'user_id' => $user->id,
            'amount' => $amount,
            'courses' => $courses
        ]);

        return $transaction;
    }

    static function complete(Transaction $transaction, User $user){
        $transaction->status = 'completed';
        $transaction->save();
        $user->referrer && self::payAffiliate($user, $transaction);
    }

    static function payAffiliate(User $user, Transaction $transaction){
        if(!$affiliate = User::where('affiliate_id', $user->referrer)->first()) return;

        $siteSettings = SiteSettings::first();
        $payout = Number::percentageDifference($siteSettings->commission, $transaction->amount);

        Referral::create([
            'referrer_id' => $affiliate->id,
            'user_id' => $user->id, 
            'earning' => $payout, 
            'transaction_id' => $transaction->id
        ]);

        $affiliate->earnings = $affiliate->earnings + $payout;
        $affiliate->save();
    }

}