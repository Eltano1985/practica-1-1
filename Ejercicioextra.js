const leer = require ("prompt-sync")();

//Crear un juego para adivinar el numero secreto generado aleatoriamente en un rango del cero al doble de la cantidad de intentos que desea tener el usuario, considerar que la cantidad minima de intentos es 3 por ende el rango minimo del numero secreto es de 0 a 6

console.log("Intente adivinar el numero secreto, cuantos intentos quiere tener (minimo 3 intentos)?");
let cantidadDeIntentos=Number(leer());

numeroSecreto = Math.floor(Math.random() * (cantidadDeIntentos * 2 - 0) + 0);

for (let contador = 0; contador < cantidadDeIntentos; contador++) {
    console.log("Ingrese el numero a adivinar");
    let numeroAAdivinar=Number(leer());
    if (numeroAAdivinar == numeroSecreto) {
        console.log("Adivinaste el numero, ganaste");
    } else {
        console.log("No adivinaste el numero, segui intentando");
    }
}







