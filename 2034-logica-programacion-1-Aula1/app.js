// Variables
let numMaxPosible = 100;
let numSecreto = Math.floor(Math.random() * numMaxPosible) + 1;
let numUser = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maxIntentos = 3;

console.log(numSecreto)

// Bucle while
while (numUser != numSecreto) {
    numUser = parseInt(prompt(`Me indicas un numero entre 1 y ${numMaxPosible} por favor:`));

    console.log(typeof(numUser));
    /*
    Bloque de comparacion
    */
    if (numUser == numSecreto) {
        // La condicion se comple y se ejecuta el bloque
        alert(`Acertaste, el numero secreto es: ${numSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`); // Template Strings | interpolación - `${numSecreto}`
    } else {
        if (numUser > numSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        } // La condicion NO se comple y se ejecuta este bloque
        // Incrementamos el contador cuando no acierta 
        // intentos = intentos + 1
        // intentos += 1
        intentos ++

        // palabraVeces = "veces"
        if (intentos > maxIntentos) {
            alert(`Llegaste al numero maximo de ${maxIntentos} intentos`)
            break
        }
    }
    console.log(`La condicion se comprobo como: ${numUser == numSecreto}`);
}