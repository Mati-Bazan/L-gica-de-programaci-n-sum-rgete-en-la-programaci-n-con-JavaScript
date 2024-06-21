// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador < 11) {
    console.log(contador)
    contador ++
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contadorTwo = 10
while (contadorTwo > 0) {
    console.log(contadorTwo)
    contadorTwo--
}

// Crea un programa de cuenta progresiva.
// Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroUser = prompt("Ingrese un numero positivo: ");
let start = 0;
while (start <= numeroUser) {
    console.log(`Numero ${start}`)
    start++
}
