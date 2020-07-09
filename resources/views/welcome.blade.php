<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Roleta</title>
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <script src="{{asset('js/main.js')}}"></script>
</head>

<body>
    <div class="navRoleta">
        <div style="" class="informacoes">
            <center>
                <h2 >Clique no "►" para iniciar a roleta</h2>
                <h3 id="resultado"></h3>
                <h4 class="tentarNovamente" id="tentarNovamente" ><b><a href="#" onclick="window.location.reload()" class="tentarNovamenteLink">Tentar novamente</a></b></h4>
            </center>
        </div>
        <div class="folha">   
            <div class="seta"></div>
            <div class="roleta" id="roleta">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
                <div class="box4"></div>
                <div class="box5"></div>
                <div class="box6"></div>
                <div class="box7"></div>
                <div class="box8"></div>
                
                <div class="premio premio1" id="opt2">3%</div>
                <div class="premio premio2" id="opt1">5%</div>
                <div class="premio premio3" id="opt8">10%</div>
                <div class="premio premio4" id="opt7">15%</div>
                <div class="premio premio5" id="opt6">3%</div>
                <div class="premio premio6" id="opt5">5%</div>
                <div class="premio premio7" id="opt4">10%</div>
                <div class="premio premio8" id="opt3">15%</div>
                
                <div id="btnPlay" class="btnRoleta" onclick="playOnClick()">►</div>
            </div>
        </div>
    </div>
</body>

</html>
