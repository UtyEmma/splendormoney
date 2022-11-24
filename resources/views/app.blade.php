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
        
        <link rel="stylesheet" href="assets/plugins/slick/slick.css">
        <link rel="stylesheet" href="assets/plugins/slick/slick-theme.css">

        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/css/plugins.min.css">


        <link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css">

        <link rel="stylesheet" href="assets/plugins/aos/aos.css">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body >
        @inertia


        <script src="/assets/js/bootstrap.bundle.min.js"></script>
		<script src="/assets/js/jquery-3.6.0.min.js"></script>
        <script src="/assets/js/owl.carousel.min.js" defer></script>
        <script src="assets/plugins/select2/js/select2.min.js"></script>
        <script src="assets/plugins/feather/feather.min.js"></script>
        <script src="assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
        <script src="assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>
        <script src="assets/js/jquery.waypoints.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/plugins/slick/slick.js"></script>
        <script src="assets/plugins/aos/aos.js"></script>
        <script src="/assets/js/script.js" defer></script>
    </body>
</html>
