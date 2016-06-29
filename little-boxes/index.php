<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Little Boxes</title>
    <link rel="stylesheet" href="style.css">
    <style>
        #song {
            background-color:black;
            color:white;
            border-style:groove;
            border-color:blue;
            margin: 20px;
            padding: 20px;
            height: 300px;
            width: 250px;
            position: absolute;
            top: 30px;
            left: 500px;
        }

        div.shadowBox {
            background-color:#909090;
            position:relative;
            top:+7px;
            left:+7px;
            margin-bottom:5px;
            margin-right:5px;
            height:auto;
            width:250px;
        }

        div.containerBox
        {
            background-color:#104040;
            color:white;
            border-style:solid;
            border-color:black;
            border-width:1px;
            padding:10px;
            position:relative;
            top:-7px;
            left:-7px;
            height:auto;
            width:auto;
        }

        .floating-box
        {
            float: left;
            width: 150px;
            height: 75px;
            margin: 10px;
            border: 3px solid #73AD21;
        }

        .middle-box {
            clear: left;
        }
    </style>
</head>
<body>
    <div id="song">
        Little boxes on the hillside,
        Little boxes made of ticky tacky,
        Little boxes on the hillside,
        Little boxes all the same.
        There's a green one and a pink one
        And a blue one and a yellow one,
        And they're all made out of ticky tacky
        And they all look just the same
    </div>

    <div class="shadowBox">
        <div class="containerBox">
            <ul>
                <li>CSIS1430 HTML</li>
                <li>CSIS1430 HTML</li>
                <li>CSIS1430 HTML</li>
                <li>CSIS1430 HTML</li>
                <li>CSIS1430 HTML</li>
            </ul>
        </div>
    </div>

    <h2>FLOATING BOXES</h2>

    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>

    <div class="middle-box">asdfasdfasdf</div>

    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
    <div class="floating-box">Floating box</div>
</body>
</html>