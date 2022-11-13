<?php

namespace App\Library;

use Illuminate\Support\Arr as SupportArr;

class Arr extends SupportArr {

    static function toObject($arr){
        return json_decode(json_encode($arr));
    }

}
