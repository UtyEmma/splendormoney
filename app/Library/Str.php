<?php

namespace App\Library;

use Illuminate\Support\Str as SupportStr;

class Str extends SupportStr {

    function __construct(){
        parent::__construct();
    }

    static function strip (string $str){
        return Str::of($str)->swap([
                        ' ' => '',
                        '-' => ''
                    ]);
    }
}
