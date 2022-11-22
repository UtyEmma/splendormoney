<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSiteSettingsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'commission' => 'required|numeric',
            'address' => 'required|string',
            'name' => 'required|string',
            'logo' => 'nullable|file|image',
            'phone' => 'required|string',
            'email' => 'required|string|email',
            'flutterwave_test_secret_key' => 'required|string',
            'flutterwave_test_public_key' => 'required|string',
            'flutterwave_live_secret_key' => 'required|string',
            'flutterwave_live_public_key' => 'required|string',
            'test_mode' => 'required|boolean'
        ];
    }
}
