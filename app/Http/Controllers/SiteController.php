<?php

namespace App\Http\Controllers;

use App\Models\SiteSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller {
    
    function index () {
        $site = SiteSettings::first();
        return Inertia::render('', [
            'site' => $site
        ]);
    }

    function update(){
        
    }
}
