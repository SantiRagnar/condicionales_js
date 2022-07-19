"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

let num1 = parseInt(prompt('ingrese el numero 1'));
let num2 = parseInt(prompt('ingrese el numero 2'));


let dif = num1 - num2;
if(dif>0){
    alert('La diferencia es positiva');
}else if(dif<0){
    alert('La diferencia es negativa');
}else{
    alert('Es cero')
}
