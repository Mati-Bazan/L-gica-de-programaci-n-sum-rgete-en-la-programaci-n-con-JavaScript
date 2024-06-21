// Variables
let numSecreto = 6
let numUser = prompt('Me indicas un numero entre 1 y 10 por favor:')

console.log(numUser)
/*
Bloque de comparacion
*/
if (numUser == numSecreto) {
    // La condicion se comple y se ejecuta el bloque 
    alert(`Acertaste, el numero secreto es: ${numSecreto}`) // Template Strings | interpolación - `${numSecreto}`
} else {
    // La condicion NO se comple y se ejecuta este bloque 
    alert('El numero no es correcto')
}
console.log(`La condicion se comprobo como: ${numUser == numSecreto}`)
