/*
let titulo = document.querySelector('h1') // Selector de titulo mediante H1
titulo.innerHTML = "Juego del numero secreto"
*/
let numeroSecreto = 0;
let intentos = 0;

// Funcion segunda clase | Parametros
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

// Funcion en "onclick" de boton "Intentar"
function verificarIntento() {
    let numUser = parseInt(document.getElementById('valorUsuario').value); // Valor del input con id "valorUsuario"
    
    if (numeroSecreto === numUser) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        // El usuario no acerto
        if (numUser > numeroSecreto) {
            asignarTextoElemento('p', "El numero secreto es menor")
        } else {
            asignarTextoElemento('p', "El numero secreto es mayor")
        }
        intentos++
        limpiarCaja()
    }
    return;
}

function numAleatorio(){
    return Math.floor(Math.random()*10)+1;
}

function  limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function condicionesInicial() {
    // Invocación de la funcion "asignarTextoElemento" 
    asignarTextoElemento('h1', "Juego del numero secreto")
    asignarTextoElemento('p', "Indica un numero entre 1 y 10")
    numeroSecreto = numAleatorio()
    intentos = 1
}

function reiniciarJuego() {
    // Limpiar la caja "input"
    limpiarCaja();
    // Indicar mensaje de inicio
    // Generar el numero aleatorio
    // Reiniciar el numero de intentos
    condicionesInicial();
    // Deshabilitar  el boton "Nuevo juego"
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
}

condicionesInicial()