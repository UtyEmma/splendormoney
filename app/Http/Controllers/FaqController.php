<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller {
    

    function index(){
        $faqs = Faq::isActive()->get();
        return Inertia::render('Faqs', [
            'faqs' => $faqs
        ]);
    }

    function list(){
        $faqs = Faq::paginate(env('PAGINATION_COUNT'));
        
        return Inertia::render('Admin/Faqs/Faqs', [
            'faqs' => $faqs
        ]);
    }

    function store(Request $request, Faq $faq = null){
        $validated = $request->validate([
            'status' => 'required|boolean',
            'question' => 'required|string',
            'answer' => 'required|string'
        ]);

        if($faq){
            $faq->update($validated);
        }else{
            Faq::create($validated);
        }

        return back()->with('success', 'Frequently Asked Question '.($faq ? 'Updated' : 'Created'));
    }

    function destroy(Faq $faq){
        $faq->delete();
        return back()->with('success', 'Frequently Asked Question Deleted');
    }

}
