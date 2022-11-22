<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller {
    

    function index(){
        $courses = Course::withRelations()->active()->limit(6)->get();

        return Inertia::render('Home', [
            'courses' => $courses
        ]);
    }

}
