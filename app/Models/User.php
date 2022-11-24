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
        'status',
        'affiliate_id',
        'referrer'
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

    static $admin = 'admin';

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

    function scopeAdmin(Builder $query){
        $query->where('role', 'admin');
    }

    function scopeAnyAdmin(Builder $query){
        $query->where('role', 'admin')->orWhere('role', 'superadmin');
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
        return $this->hasMany(Referral::class, 'referrer_id');
    }

    function downlines() {
        return $this->hasMany(User::class, 'referrer');
    }

    function wishlists(){
        return $this->hasMany(Wishlist::class, 'user_id');
    }

    function reviews(){
        return $this->hasManyThrough(Review::class, Course::class, 'instructor', 'course_id', 'id', 'id');
    }

    static function isAnyAdmin(User $user = null){
        $currentUser = $user ?? auth()->user();
        return $currentUser->role === 'admin' || $currentUser->role === 'superadmin';
    }

    static function isRole($role, User $user = null){
        $currentUser = $user ?? auth()->user();
        return $currentUser->role === $role;
    }

    

}
