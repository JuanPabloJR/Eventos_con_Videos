let video = document.querySelector(".botonVideo");

video.addEventListener("play",function () {
    setTimeout(function () { //Ejecuta una sola vez
        ponerColorBody();
    }, 3000);
    console.log("Di play en el video");
 });

video.addEventListener("seeking",function () {
    console.log("Se está viendo una parte del video", this.currentTime);
});

video.addEventListener("ended",function () {
    console.log("Terminó el video");
    let decision = confirm("¿Deseas ver denuevo el video?");
    console.log(decision);
    if (decision) {
        video.play();
    } else {
        window.location = "https://www.google.com"
    }
});

video.addEventListener("pause",function () {
    console.log("Le di pausa al video");
});

// Temporizadores o timers

setInterval
setTimeout

let temporizador = setInterval(function () { //Ejecuta en ciclo
    ponerColorBody();
}, 2000);


function ponerColorBody() {
    let pantalla = document.body;
    pantalla.style.background = pantalla.style.background == "blue" ? "green" : "blue";
}

// Arreglos, Vectores, Arrays

            //posiciones
// let array = ["Uno", "dos", "tres"]

// let array2 = ["Cuatro", "cinco", "seis"]

// array2 [1];

// let multidiimensional = [array, array2];

// multidiimensional[0][1]; //= "dos";