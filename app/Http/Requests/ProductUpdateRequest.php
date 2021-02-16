<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'price' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'အမည်ထည့်ရန် လိုအပ်သည်',
            'name.string' => 'အမည်သည် စာသားဖြစ်ရမည်',
            'price.required' => 'စျေးနှုံးထည်ရန် လိုအပ်သည်',
            'price.numeric' =>  'စျေးနှုံးသည် ကိန်းဂဏန်း ဖြစ်ရမည်'
        ];
    }
}
