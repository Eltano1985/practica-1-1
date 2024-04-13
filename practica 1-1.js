const leer = require ("prompt-sync")();

console.log("Intente adivinar el numero secreto, cuantos intentos quiere tener?");
let cantidadDeIntentos=leer();

numeroSecreto = Math.floor(Math.random() * (cantidadDeIntentos * 2 - 0) + 0);
