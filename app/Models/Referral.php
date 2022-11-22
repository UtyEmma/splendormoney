<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['referrer_id', 'user_id', 'earning', 'transaction_id'];

    function downline(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    function referrer(){
        return $this->belongsTo(User::class, 'referrer_id', 'id');
    }

    function transaction(){
        return $this->hasOne(Transaction::class, 'id', 'transaction_id');
    }

}
