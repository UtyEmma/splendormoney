<?php

namespace App\Http\Controllers;

use App\Library\FileHandler;
use App\Library\Str;
use App\Models\Course;
use App\Models\Lecture;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class LectureController extends Controller
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Course $course, Module $module) {
        $request->validate([
            'title' => ['required', 'string', Rule::unique('modules', 'title')->where('course_id', $course->id)],
            'file' => 'required|file|mimes:mp4,mkv,avi',
            'description' => 'nullable|string',
            'duration' => 'nullable'
        ]);

        $file = $request->file('file'); 
        $extension = $file ? $file->getClientOriginalExtension() : "";
        $size = $file ? $file->getSize() : "";
        $file_type = $file ? $file->getMimeType() : "";

        $path =  $course->slug."/".Str::slug($module->title);
        $path = $request->file('file')->store($path, 'files');

        $lecture = Lecture::create([
            'title' => $request->title,
            'file' => $path,
            'description' => $request->description,
            'module_id' => $module->id,
            'extension' => $extension, 
            'size' => $size, 
            'duration' => $request->duration, 
            'type' => $file_type
        ]);


        $course = $course->withRelations()->first();

        return redirect()->back()->with('course', $course);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lecture  $lecture
     * @return \Illuminate\Http\Response
     */
    public function show(Lecture $lecture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lecture  $lecture
     * @return \Illuminate\Http\Response
     */
    public function edit(Lecture $lecture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lecture  $lecture
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course, Module $module, Lecture $lecture)
    {
        $request->validate([
            'title' => 'required|string',
            'file' => 'nullable|file|mimes:mp4,mkv,avi',
            'description' => 'nullable|string'
        ]);

        $file = $request->hasFile('file') ? FileHandler::upload($request->file('file')) : $lecture->file;
        
        $lecture->update([
            'title' => $request->title,
            'file' => $file,
            'description' => $request->description
        ]);

        $course = $course->withRelations()->first();

        return redirect()->back()->with('course', $course);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lecture  $lecture
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course, Module $module, Lecture $lecture){
        $lecture->delete();
        $course = $course->withRelations()->first();
        return redirect()->back()->with('course', $course);
    }
}
