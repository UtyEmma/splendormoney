<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller {
    
    function dashboard(){
        return Inertia::render('Student/StudentOverview');
    }
}
