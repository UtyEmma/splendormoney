<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['question', 'answer', 'status'];

    protected $attributes = [
        'status' => true
    ];

    function scopeIsActive($query){
        $query->where('status', true);
    }
}
