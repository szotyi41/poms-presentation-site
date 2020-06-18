<!DOCTYPE html>
<html>
<head>
    
    <title>POMS</title>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="assets/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- CSS for Bootstrap -->
    <!-- <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"> -->

    <!-- JS for Bootstrap -->
    <!-- <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/popper.js/dist/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script> -->

    <!-- Font Awesome -->
    <!-- <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css"> -->

    <!-- Circle Progress -->
    <!-- <script src="node_modules/jquery-circle-progress/dist/circle-progress.min.js"></script> -->

    <!-- Materialize for inputs -->
    <!-- <script src="node_modules/materialize-css/dist/js/materialize.min.js"></script>
    <link rel="stylesheet" href="materialize-css-custom.css"> -->

    <!-- <link rel="stylesheet" href="style.css" async>
    <script src="animations.js"></script>
    <script src="forms.js" type="module"></script>
    <script src="js/video-player/video-player-controls.js"></script>
    <script src="persons.js"></script> -->

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #366F62;
        }

        iframe {
            display: block;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>

    <script>
        const iframes = [];
        function resizeIframe(obj) {
            obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';

            let iframesProperties = {
                node: obj,
                currentHeight: obj.contentWindow.document.body.scrollHeight
            };

            iframes.push(iframesProperties);
        }

        function loadBody(){
            document.querySelector('body').style.opacity = 1;
        }

        (function() {
            setTimeout(function() {
                loadBody();
            }, 2000);
        })();

        setInterval(function() {
            if(iframes.length > 0){
                iframes.map( iframe => {
                    let iframePossibleNewHeight = iframe.node.contentWindow.document.body.scrollHeight;
                    
                    if(iframe.height != iframePossibleNewHeight){
                        iframe.node.style.height = iframePossibleNewHeight + 'px';
                    }
                });
            }
        }, 1);
    </script>

</head>

<body style="transition: all .3s ease; opacity: 0;">

<?php
$case = isset($_GET['case']) ? $_GET['case'] : '';
$demo = isset($_GET['demo']) ? $_GET['demo'] : '';
$map = isset($_GET['map']) ? $_GET['map'] : '';

if (!empty(trim($case))) {
    echo '<iframe style="background: #366F62;" src="https://pomscloud.ie/projects/'.$case.'.html" scrolling="no" onload="resizeIframe(this)"></iframe>';
}

if (!empty(trim($demo))) {
    echo '<iframe style="background: #366F62;" src="https://pomscloud.ie/projects/'.$demo.'.html" scrolling="no" onload="resizeIframe(this);"></iframe>';
}

if (!empty(trim($map))) {
    $personId = isset($_GET['personid']) ? $_GET['personid'] : '';
    $mapUrl = !empty(trim($personId)) ? $map.'.html?personid='.$personId.'' : $map.'.html';
    echo '<iframe style="background: #366F62;" src="https://pomscloud.ie/projects/'.$mapUrl.'" scrolling="no" onload="resizeIframe(this)"></iframe>';
}
?>

</body>
</html>