<?php

namespace App\Http\Services;

use App\Models\SiteSettings;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Http;

class PaymentService {

    static function initiate(Transaction $transaction, User $user){
        if(!$siteSettings =  SiteSettings::first()) 
                        return redirect()->back()->with('error', 'Site Error: Payment Method not configured! Please contact Support');
        
        $key = $siteSettings->test_mode ? $siteSettings->flutterwave_test_public_key : $siteSettings->flutterwave_live_public_key;
        
        if(!$key) return redirect()->back()->with('error', 'Site Error: Payment Method not configured! Please contact Support');
        
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

    static function verify($flutterwave_id) {
        if(!$siteSettings =  SiteSettings::first()) 
                return redirect()->back()->with('error', 'Site Error: Payment Method not configured! Please contact Support');
        
        $key = $siteSettings->test_mode ? $siteSettings->flutterwave_test_secret_key : $siteSettings->flutterwave_live_secret_key;

        if(!$key) return redirect()->back()->with('error', 'Site Error: Payment Method not configured! Please contact Support');

        $response = Http::withHeaders([
            'Authorization' => "$key"
        ])->get("https://api.flutterwave.com/v3/transactions/".$flutterwave_id."/verify");
        
        if($response->ok() && $response->status() === 200) return $response->json()['data'];
        throw new \Exception("Payment Verification request could not be completed", 400);

    }

}