<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Library\Token;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', Rules\Password::defaults()],
            'terms' => 'accepted'
        ]);

        $affiliate_id = Token::text(5, 'users', 'affiliate_id'); 
        
        $referrer = $request->referrer ? User::where('affiliate_id', $request->referrer)->first() : null;

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => 'user',
            'password' => Hash::make($request->password),
            'affiliate_id' => $affiliate_id,
            'referrer' => $referrer
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('student.dashboard'));
    }
}
