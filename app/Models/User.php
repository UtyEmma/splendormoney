<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'description',
        'role',
        'avatar',
        'status'
    ];

    protected $attributes = [
        'status' => 'active',
        'earnings' => 0,
        'role' => 'user'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    function scopeSuperAdmin(Builder $query){
        $query->where('role', 'superadmin');
    }

    function scopeInstructors(Builder $query){
        $query->where('role', 'instructor');
    }

    function scopeUsers(Builder $query){
        $query->where('role', 'user');
    }

    function scopeStudents(Builder $query){
        $query->where('role', 'user');
    }

    function scopeAdmin(Builder $query) {
        $query->where('role', 'admin');
    }

    function enrollments() {
        return $this->hasMany(Enrollment::class, 'student_id');
    }

    function courses(){
        return $this->hasMany(Course::class, 'instructor');
    }

    function students(){
        return $this->hasManyThrough(Enrollment::class, Course::class, 'instructor', 'course_id', 'id', 'id');
    }

    function transactions(){
        return $this->hasMany(Transaction::class, 'user_id');
    }

    function referrals() {
        return $this->hasMany(Enrollment::class, 'referrer_id');
    }
}
