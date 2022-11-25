<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller {
    
    function __invoke(Request $request) {
        $path = $request->path;
        abort_if(!Storage::disk('files')->exists($path), 404, "The File does not exist! Check the path");

        return Storage::drive('files')->response($path);
    }
}
