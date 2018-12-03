<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    {{--  This link is how were able to use css  --}}
    <link rel="stylesheet" href="css/app.css">
</head>
<script >

</script>
<body>
    {{--  navbar  --}}
    @include('layouts.partials.navbar')
        {{--  the div the will be used to hold our main content  --}}
        <div class="wrapper">
        {{--  we will be using '@extend('body_content')' whenever we create a new page  --}}
        @yield('content')
        </div>
    {!! HTML::script('js/app.js') !!}
</body>
</html>
