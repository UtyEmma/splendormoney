<?php

namespace App\Http\Controllers;

use App\Library\FileHandler;
use App\Library\Str;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CategoryController extends Controller {
    

    function index(){
        $categories = Category::isActive()->with(['courses'])->paginate(env('PAGINATION_COUNT'));
        return Inertia::render('Categories', [
            'categories' => $categories
        ]);
    }

    function list(){
        $categories = Category::with(['courses'])->paginate(env('PAGINATION_COUNT'));
        return Inertia::render('Admin/Categories/Categories', [
            'categories' => $categories
        ]);
    }

    function edit(Category $category = null){
        return Inertia::render('Admin/Categories/EditCategory', [
            'category' => $category
        ]);
    }

    function update(Request $request, Category $category = null){

        $validated = $request->validate([
            'name' => ['required'] + ($category ? [Rule::unique('categories', 'name')->ignore($category->id, 'id')] : ['unique:categories,name']),
            'description' => 'nullable|string',
            'image' => 'required|image',
            'status' => 'nullable|boolean'
        ]);

        $image = $request->hasFile('image') ? FileHandler::upload($request->file('image')) : ($category ? $category->image : null);

        $data = collect($validated)->merge([
            'slug' => Str::slug($request->name),
            'image' => $image
        ])->toArray();
        
        $category ? $category->update($data) : Category::create($data);
        
        return back()->with('success', 'Category '.($category ? 'Updated' : 'Created'));

    }

    function destroy(Category $category){
        $category->delete();
        return back()->with('success', 'Category Deleted');
    }

}
