<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCourseRequest extends FormRequest
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
    public function rules()
    {
        return [
            "instructor" => ["required", Rule::exists('users', 'id')->where('role', 'instructor')],
            "name" => ["required", "string", "max:255", Rule::unique('courses')],
            "description" => "nullable|string",
            "category" => "nullable|string",
            "image" => "nullable|file|mimetypes:image/*",
            "video" => "nullable|url",
            "price" => "required|numeric",
            "discount" => "nullable|numeric|min:0|max:100"
        ];
    }
}
