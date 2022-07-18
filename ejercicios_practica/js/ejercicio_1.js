"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda

if(numero1 > numeo2){
    alert('El numero 1 es mayor');
}else{
    alert('El numero 2 es mayor');
};

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

if(numero1 == 0){
    alert('Numero 1 es 0');
}else if(numero1 > 0){
    alert('Numero 1 es positivo');
}else{
    alert('Numero 1 es negativo');
};

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición

if(numero1 >0 && numero1 <100){
    alert('Se cumple');
}else{
    alert('No se cumple');
};

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

if(numero1 < 10 || numero2 > -2){
    alert('Se cumple')
}else{
    alert('No se cumple')
}
