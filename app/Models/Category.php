<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['name', 'description', 'image', 'slug', 'status'];

    protected $attributes = [
        'status' => true
    ];

    function scopeIsActive($query){
        $query->where('status', true);
    }

    function courses(){
        return $this->hasMany(Course::class, 'category', 'id');
    }


}
