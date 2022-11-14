<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['id', 'course_id', 'student_id', "transaction_id", 'status'];

    protected $attributes = [
        'status' => 'active'
    ];

    public function course (){
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function transaction() {
        return $this->hasOne(Transaction::class, 'id', 'transaction_id');
    }


    public function student(){
        return $this->belongsTo(User::class, 'student_id');
    }
}
