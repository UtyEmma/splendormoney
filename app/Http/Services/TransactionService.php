<?php

namespace App\Http\Services;

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

    static function complete(Transaction $transaction){
        $transaction->status = 'completed';
        $transaction->save();
        return true;
    }



}