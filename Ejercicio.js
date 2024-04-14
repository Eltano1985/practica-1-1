const leer = require("prompt-sync")();
//Crear un juego para adivinar el numero secreto definido dentro del programa donde el usuario tendra 3 intentos

let NUMERO_SECRETO = 20

for (let contador = 0; contador < 3; contador++) {
    console.log("Ingresa el numero a adivinar");
    numeroAAdivinar = Number(leer());

    if (numeroAAdivinar == NUMERO_SECRETO) {
        console.log("Adivinaste el nuemero secreto, ganaste");
        contador = 5
    } else {
        console.log("No adivinaste, segui intentando");

    }

}