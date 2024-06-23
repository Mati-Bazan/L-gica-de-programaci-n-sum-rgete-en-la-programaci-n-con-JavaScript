/*
let titulo = document.querySelector('h1') // Selector de titulo mediante H1
titulo.innerHTML = "Juego del numero secreto"
*/
let numeroSecreto = numAleatorio()

// Funcion segunda clase | Parametros
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

// Funcion en "onclick" de boton "Intentar"
function verificarIntento() {
    let numUser = parseInt(document.getElementById('valorUsuario').value); // Valor del input con id "valorUsuario"
    console.log(typeof(numUser))
    console.log(numeroSecreto)
    console.log(typeof(numeroSecreto))
    console.log(numUser)
    console.log(numeroSecreto === numUser)
    return;
}

function numAleatorio(){
    return Math.floor(Math.random()*10)+1;
}
// Invocación de la funcion "asignarTextoElemento" 
asignarTextoElemento('h1', "Juego del numero secreto")
asignarTextoElemento('p', "Indica un numero entre 1 y 10")