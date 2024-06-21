// Variables
let numSecreto = 6;
let numUser = 0;
let intentos = 1;
let palabraVeces = "vez"
// Bucle while
while (numUser != numSecreto) {
    numUser = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log(numUser);
    /*
    Bloque de comparacion
    */
    if (numUser == numSecreto) {
        // La condicion se comple y se ejecuta el bloque
        alert(`Acertaste, el numero secreto es: ${numSecreto}. Lo hiciste en ${intentos} ${palabraVeces}.`); // Template Strings | interpolación - `${numSecreto}`
    } else {
        if (numUser > numSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        // Incrementamos el contador cuando no acierta 
        intentos = intentos + 1
        palabraVeces = "veces"
        // La condicion NO se comple y se ejecuta este bloque
        // alert('El numero no es correcto')
    }
    console.log(`La condicion se comprobo como: ${numUser == numSecreto}`);
}