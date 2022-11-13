<?php

namespace App\Http\Services;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Http;

class PaymentService {

    static function initiate(Transaction $transaction, User $user){
        $key = env('PAYMENT_LIVE') ? env('FLUTTERWAVE_PUBLIC_KEY') : env('FLUTTERWAVE_PUBLIC_TEST_KEY');
        return [
            'public_key' => $key,
            'tx_ref' => $transaction->reference,
            'amount' => $transaction->amount,
            'currency' => "NGN",
            'customer' => [
                'email' => $user->email,
                'name' => "$user->name"
            ],
            'customizations' => [
                'title' => env('APP_NAME')
            ]
        ];
    }

    static function verify(Transaction $transaction, $flutterwave_id) {
        $key = env('PAYMENT_LIVE') ? env('FLUTTERWAVE_SECRET_KEY') : env('FLUTTERWAVE_SECRET_TEST_KEY');
        $response = Http::withHeaders([
            'Authorization' => "$key"
        ])->get("https://api.flutterwave.com/v3/transactions/".$flutterwave_id."/verify");
        
        if($response->ok() && $response->status() === 200) return $response->json()['data'];
        throw new \Exception("Payment Verification request could not be completed", 400);

    }

}