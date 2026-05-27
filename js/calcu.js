
//sumar
function suma(){
let inputnumero1 = document.getElementById("Numero1");
let numero1 = inputnumero1.value;
let inputnumero2 = document.getElementById("Numero2");
let numero2 = inputnumero2.value;
let resultado=(+numero1) + (+numero2);


let resultado_p=document.getElementById("resultado");
resultado_p.innerText="El resultado es:"+resultado;
}

document.getElementById("sumar").addEventListener("click", suma);
//restar
function resta(){
let inputnumero1 = document.getElementById("Numero1");
let numero1 = inputnumero1.value;
let inputnumero2 = document.getElementById("Numero2");
let numero2 = inputnumero2.value;
let resultado=(+numero1) - (+numero2);


let resultado_p=document.getElementById("resultado");
resultado_p.innerText="El resultado es:"+resultado;
}

document.getElementById("sumar").addEventListener("click", resta);

//multiplicar
function multiplicacion(){
let inputnumero1 = document.getElementById("Numero1");
let numero1 = inputnumero1.value;
let inputnumero2 = document.getElementById("Numero2");
let numero2 = inputnumero2.value;
let resultado=(+numero1) * (+numero2);


let resultado_p=document.getElementById("resultado");
resultado_p.innerText="El resultado es:"+resultado;
}

document.getElementById("sumar").addEventListener("click", multiplicacion);


//Dividir

function dividir(){
    let inputnumero1 = document.getElementById("Numero1");
    // 1. Usar Number() para convertir el texto en número real
    let numero1 = Number(inputnumero1.value);

    let inputnumero2 = document.getElementById("Numero2");
    let numero2 = Number(inputnumero2.value);

    let resultado = (numero1) / (numero2);

    // 2. Corregido: Agregar las comillas para seleccionar el ID "resultado"
    let resultado_p = document.getElementById("resultado");

    // 3. Corregido: Mostrar la variable 'resultado' al final de la cadena
    resultado_p.innerText = "El resultado es: " + resultado;
}

document.getElementById("sumar").addEventListener("click", dividir);



