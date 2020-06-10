<!DOCTYPE html>
<html>

<head>
    
    <title>POMS</title>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="assets/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- CSS for Bootstrap -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- JS for Bootstrap -->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/popper.js/dist/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">

    <!-- Circle Progress -->
    <script src="node_modules/jquery-circle-progress/dist/circle-progress.min.js"></script>

    <!-- Materialize for inputs -->
    <script src="node_modules/materialize-css/dist/js/materialize.min.js"></script>
    <link rel="stylesheet" href="materialize-css-custom.css">

    <link rel="stylesheet" href="style.css" async>
    <script src="animations.js"></script>
    <script src="forms.js"></script>
    <script src="persons.js"></script>

</head>

<body style="transition: all .3s ease; opacity: 0;">

<?php
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';
$brand = isset($_GET['brand']) ? $_GET['brand'] : 'mediamarkt';
$demo = isset($_GET['demo']) ? $_GET['demo'] : 'audi';

if (isset($_GET['brand'])) {
    include "dynamic-section-$brand-$lang.php";
}

if (isset($_GET['demo'])) {
    include "demo-section-$demo-$lang.php";
}

if (isset($_GET['map'])) {
    include "map-section.php";
}
?>

</body>
</html>