<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    @include('layouts.partials.navbar')
    <div class="main">
    @yield('body_content')
    </div>
    <div id="app">
        <v-app/>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
