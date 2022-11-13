<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model {
    use HasFactory, HasUuids;

    protected $fillable = ['title', 'course_id'];

    public function lectures () {
        return $this->hasMany(Lecture::class, 'module_id');
    }
}
