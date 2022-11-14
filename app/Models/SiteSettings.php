<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSettings extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['commission', 'address', 'name', 'logo', 'phone', 'email', 'test_mode', 'flutterwave_test_secret_key', 'flutterwave_test_public_key', 'flutterwave_live_secret_key', 'flutterwave_live_public_key'];
}
