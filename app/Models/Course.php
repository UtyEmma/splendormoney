<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['instructor', 'name', 'slug', 'description', 'category', 'image', 'video', 'price', 'discount', 'status'];

    protected $attributes = [
        'status' => 'pending',
        'discount' => 0,
    ];

    function scopeWithRelations (Builder $query) {
        $query->with(['modules', 'modules.lectures', 'instructor']);
    }

    function scopeActive(Builder $query){
        $query->where('status', 'active');
    }

    function instructor () {
        return $this->belongsTo(User::class, 'instructor');
    }

    function modules(){
        return $this->hasMany(Module::class, 'course_id');
    }

    function enrollments(){
        return $this->hasMany(Enrollment::class, 'course_id');
    }

    function transactions (){
        return $this->hasManyThrough(Transaction::class, Enrollment::class, 'course_id', 'id', 'id', 'transaction_id');
    }

    
}
