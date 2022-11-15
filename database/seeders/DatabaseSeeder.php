<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\SiteSettings;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        User::firstOrCreate([
            'email' => 'admin@splendormoneyschool.com',
            'role' => 'superadmin'
        ], [
            'name' => 'Splendor Admin',
            'password' => Hash::make('admin')
        ]);

        SiteSettings::firstOr(function(){
            SiteSettings::create([
                'email' => 'info@splendormoneyschool.com',
                'commission' => 10, 
                'address' => "27 Maximum Street Enugu", 
                'name' => "Splendor Money School", 
                'logo' => asset(url('assets/img/logo.svg')), 
                'phone' => "+234 903 870 5881",
                'test_mode' => true,
                'flutterwave_test_secret_key' => env('FLUTTERWAVE_SECRET_TEST_KEY'),
                'flutterwave_test_public_key' => env('FLUTTERWAVE_PUBLIC_TEST_KEY'),
                'flutterwave_live_secret_key' => env('FLUTTERWAVE_SECRET_KEY'),
                'flutterwave_live_public_key' => env('FLUTTERWAVE_PUBLIC_KEY')
            ]);
        });
    }
}
