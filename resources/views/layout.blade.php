<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Spantech</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('img/favicon.ico') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="https://kit.fontawesome.com/336aa35d3e.js"></script>
</head>

<body>

    <div id="app" class="container-fluid px-0">
        
        <navigation--spantech></navigation--spantech>
        <div class="content-wrapper">
            @yield('content')
        </div>

        <footer-spantech></footer-spantech>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
