<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller {
    

    function index(){
        $courses = Course::withRelations()->active()->limit(6)->get();
        $testimonials = Testimonial::where('status', true)->limit(5)->get();

        $categories = Category::with(['courses'])->has('courses')->isActive()->get();
        $instructors = User::instructors()->has('courses')->withCount(['courses'])->isActive()->limit(9)->get();

        return Inertia::render('Home', [
            'courses' => $courses,
            'testimonials' => $testimonials,
            'categories' => $categories,
            'instructors' => $instructors
        ]);
    }

    function about(){
        return Inertia::render('About');
    }

    function terms(){
        return Inertia::render('Terms');
    }

    function privacy(){
        return Inertia::render('Privacy');
    }

}
