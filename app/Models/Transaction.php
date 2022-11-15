<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ["reference", "amount", "user_id", "status", 'courses'];

    protected $casts = [
        'courses' => 'array'
    ];

    protected $attributes = [
        'status' => 'pending'
    ];

    function user(){
        $this->belongsTo(User::class, 'user_id');
    }

}
