
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

document.getElementById("restar").addEventListener("click", resta);

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

document.getElementById("multiplicar").addEventListener("click", multiplicacion);


//Dividir
function dividir(){
    let inputnumero1 = document.getElementById("Numero1");
    let numero1 = inputnumero1.value;

    let inputnumero2 = document.getElementById("Numero2");
    let numero2 = inputnumero2.value;

    let resultado = (+numero1) / (+numero2);

    let resultado_p = document.getElementById("resultado");

    resultado_p.innerText = "El resultado es: " + resultado;
}

document.getElementById("dividir").addEventListener("click", dividir);



