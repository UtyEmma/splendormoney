<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(){
        return [
            'name' => 'required|string|max:255',
            'email' => ["required", "string", "email", "max:255", Rule::unique('users', 'email')->ignore($this->request->all()['instructor_id'])],
            'password' => ['nullable', Password::defaults(), 'confirmed'],
            'description' => 'nullable|string',
            'avatar' => 'nullable|image'
        ];
    }
}