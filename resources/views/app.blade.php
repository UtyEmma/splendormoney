<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Splendor Money School') }}</title>

        <link rel="stylesheet" href="/assets/css/style-bundle.min.css">
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css">

        <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.min.css">
        <link rel="stylesheet" href="/assets/plugins/fontawesome/css/all.min.css">
        
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css">
        <link rel="stylesheet" href="assets/css/owl.theme.default.min.css">
        
        <link rel="stylesheet" href="/assets/plugins/feather/feather.css">
        
        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/css/plugins.min.css">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body >
        @inertia


        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/owl.carousel.min.js"></script>
        <script src="/assets/js/script.js"></script>
		<script src="/assets/js/jquery-3.6.0.min.js"></script>
    </body>
</html>
