<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['user_id', 'course_id'];

    public function course(){
        return $this->hasOne(Course::class, 'id', 'course_id');
    }

    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    
}
