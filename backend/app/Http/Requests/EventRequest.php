<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'title' => ['required'],
            'description' => ['required'],
            'start_date' => ['required'],
            'end_date' => ['required'],
            'location' => ['required'],
            'organizers_id' => ['required'],
            'status' => ['required'],
            'banner'      => ['required'],
            'thumbnail'   => ['required'],
            'images'      => ['required'],
            'is_featured' => ['required'],
        ];
    }
}
