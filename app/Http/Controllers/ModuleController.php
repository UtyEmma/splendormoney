<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request){
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $course) {
        $request->validate([
            'title' => 'required|string'
        ]);

        Module::create([
            'course_id' => $course,
            'title' => $request->title
        ]);

        $course = Course::withRelations()->find($course);

        return back()->with([
            'course' => $course
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function show(Module $module)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function edit(Module $module)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $course, Module $module)
    {
        $request->validate([
            'title' => 'required|string'
        ]);

        $module->update([
            'title' => $request->title
        ]);

        $course = Course::withRelations()->find($course);

        $course = $course->withRelations();
        return redirect()->back()->with('course', $course);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function destroy($course, Module $module)
    {
        $module->delete();
        $course = Course::withRelations()->find($course);
        return redirect()->back()->with('course', $course);
    }
}
