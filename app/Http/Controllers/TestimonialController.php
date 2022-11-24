<?php

namespace App\Http\Controllers;

use App\Library\FileHandler;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller {
    
    function list(){
        $testimonials = Testimonial::paginate(env('PAGINATION_COUNT'));
        
        return Inertia::render('Admin/Testimonials/Testimonials', [
            'testimonials' => $testimonials
        ]);
    }

    function create(Request $request, Testimonial $testimonial){
        return Inertia::render('Admin/Testimonials/NewTestimonial', [
            'testimonial' => $testimonial
        ]);
    }

    function store(Request $request){
        $validated = $request->validate([
            'name' => 'required|string', 
            'message' => 'required|string', 
            'image' => 'nullable|image', 
            'title' => 'nullable|string',
            'status' => 'nullable|boolean'
        ]);

        $image = $request->hasFile('image') ? FileHandler::upload($request->file('image')) : null;

        Testimonial::create(collect($validated)->merge([
            'image' => $image
        ])->toArray());

        return back()->with('success', 'Testimonial Added Successfully');
    }

    function update(Request $request, Testimonial $testimonial){
        $validated = $request->validate([
            'name' => 'required|string', 
            'message' => 'required|string', 
            'image' => 'nullable|image', 
            'title' => 'nullable|string',
            'status' => 'nullable|boolean'
        ]);

        $image = $request->hasFile('image') ? FileHandler::upload($request->file('image')) : $testimonial->image;

        $testimonial->update(collect($validated)->merge([
            'image' => $image
        ])->toArray());

        return back()->with('success', 'Testimonial Updated Successfully');
    }

    function destroy(Testimonial $testimonial){
        $testimonial->delete();
        return back()->with('success', "Testimonial Deleted Successfully");
    }

}
