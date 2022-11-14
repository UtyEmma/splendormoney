<?php

namespace App\Http\Services;

use App\Library\Number;
use App\Library\Str;
use App\Library\Token;
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
        self::payAffiliate($user, $transaction);
        return true;
    }

    static function payAffiliate(User $user, Transaction $transaction){
        if(!$user->referrer) return;
        $affiliate = User::where('affiliate_id', $user->referrer)->first();
        if(!$affiliate) return;

        $payout = Number::percentageDifference(10, $transaction->amount);
        $affiliate->earnings = $affiliate->earnings + $payout;
        $affiliate->save();
    }


}