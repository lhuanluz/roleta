function playOnClick() {   
    var min = Math.ceil(3);
    var max = Math.floor(10);
    var rand = Math.random() * (max - min + 1) + min;

    globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roleta: document.getElementById("roleta"),
    }

    globalObjects.timeInitial = new Date();
    globalObjects.btnPlay.style.visibility = "hidden";
    globalObjects.roleta.style.animation = "roleta 1s linear infinite";
    setTimeout(randomTime, rand.toFixed(3) * 1000);
}
function randomTime(){
    globalObjects.roleta.style["animation-play-state"] = "paused";
    calculate();
}

function calculate() {
    var timeFinal = new Date();
    var tempo = Math.abs(timeFinal - globalObjects.timeInitial);
    var tempoRestante = tempo/1000;
    var tempoRestante = tempoRestante.toFixed(3) - Math.floor(tempoRestante.toFixed(3));
    var resultado = verificaRange(tempoRestante);
    var premio = document.getElementById("opt"+resultado);
    var resultado = document.getElementById("resultado").innerText = "Parabéns, você ganhou: " + premio.innerText;
    document.getElementById("tentarNovamente").style.visibility = "visible";
}

function verificaRange(numero){
    if(numero<= 0.125){return 1;}
    else if(numero >= 0.126 && numero <= 0.250){return 2;}
    else if(numero >= 0.251 && numero <= 0.375){return 3;}
    else if(numero >= 0.376 && numero <= 0.500){return 4;}
    else if(numero >= 0.501 && numero <= 0.625){return 5;}
    else if(numero >= 0.626 && numero <= 0.750){return 6;}
    else if(numero >= 0.751 && numero <= 0.875){return 7;}
    else{return 8;}

}