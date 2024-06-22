// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío"

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function desafioOne() {
    console.log("El botón fue clicado")
}

// Crea una función que se ejecute cuando se haga clic en el botón "prompt",
// preguntando el nombre de una ciudad de Brasil.
// Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function city() {
    cityName = prompt("Nombre alguna ciudad de Brasil:")
    alert(`Estuve en ${cityName} y me acordé de ti`)
}

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function alertBtn() {
    alert("Yo amo JS")
}

// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sumar() {
    num1 = parseInt(prompt("Ingrese el primer valor:"));
    num2 = parseInt(prompt("Ingrese el segundo valor:"));
    alert(`La sumatoria de ${num1} + ${num2} es igual a: ${num1 + num2}`)
}