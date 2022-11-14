<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['review', 'rating', 'status', 'course_id', 'student_id'];

    protected $attributes = [
        'status' => 'active'
    ];

    function course(){
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    function student(){
        return $this->belongsTo(Course::class, 'student_id', 'id');
    }

}
