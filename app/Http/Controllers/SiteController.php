<?php

namespace App\Http\Controllers;

use App\Http\Requests\Settings\UpdateSiteSettingsRequest;
use App\Library\FileHandler;
use App\Models\SiteSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller {
    
    function index () {
        $settings = SiteSettings::first();
        return Inertia::render('Admin/Settings', [
            'settings' => $settings            
        ]);
    }

    function update(UpdateSiteSettingsRequest $request, SiteSettings $setting){
        $logo = $request->hasFile('logo') ? FileHandler::upload($request->file('logo')) : $setting->logo;

        $setting->update($request->safe()->merge([
            'logo' => $logo
        ])->all());
        
        return back()->with('success', 'Site Settings Updated Successfully');
    }
}
