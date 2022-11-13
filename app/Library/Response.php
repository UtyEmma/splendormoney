<?php

namespace App\Library;

use Illuminate\Support\Arr;
use Inertia\Inertia;

class Response {

    private $code = 200;
    private $wantsJson = false;
    private $status = true;

    private function mapFunctionParameters(array $args) : array {
        $data = [];
        $message = '';

        foreach ($args as $arg) :
            if(is_string($arg)) $message = $arg;
            if(is_array($arg)) $data = $arg;
        endforeach;
        
        return ['message' => $message, ...$data];
    }

    static function success(int $code = 200){
        $self = new self;
        $self->code = $code;
        $self->status = true;
        $self->wantsJson = request()->expectsJson();
        return $self;    
    }

    static function error(int $code = 400){
        $self = new self;
        $self->code = $code;
        $self->status = false;
        $self->wantsJson = request()->expectsJson();
        return $self;    
    }

    function redirectBack(mixed ...$args){
        $data = $this->mapFunctionParameters($args);
        return $this->wantsJson ? $this->json($data) : back()->with($data);
    }
    
    function redirect(string $to, mixed ...$args){
        $data = $this->mapFunctionParameters($args);
        return $this->wantsJson ? $this->json($data) : redirect($to)->with($data);
    }
    
    function intended(string $default, mixed ...$args){
        $data = $this->mapFunctionParameters($args);
        return $this->wantsJson ? $this->json($data) : redirect()->intended($default)->with($data);
    }
    
    function view($blade, mixed ...$args){
        $data = $this->mapFunctionParameters($args);
        return $this->wantsJson ? $this->json($data) : response()->view($blade, $data);
    }
    
    function inertia(string $component, mixed ...$args){
        return Inertia::render($component, $this->mapFunctionParameters($args));
    }
    
    function json(mixed ...$args){
        $data = $this->mapFunctionParameters($args);
        return response()->json($data, $this->code);
    }


}
