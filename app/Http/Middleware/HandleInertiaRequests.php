<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request) {
        $user = $request->user();

        return array_merge(parent::share($request), [
            'app' => [
                'name' => env('APP_NAME')
            ],
            'auth' => [
                'user' => $user ? User::with(['wishlists.course.instructor'])->withCount(['wishlists'])->find($user->id) : null,
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'message' => session()->get('message', null),
            'error' => session()->get('error', null),
            'success' => session()->get('success', null),
            'warning' => session()->get('warning', null),
            'details' => session()->get('details', null)
        ]);
    }
}
