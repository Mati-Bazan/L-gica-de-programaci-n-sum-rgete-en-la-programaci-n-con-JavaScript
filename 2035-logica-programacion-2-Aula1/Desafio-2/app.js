// Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld() {
    console.log("Hola mundo")
}
helloWorld()

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function consolaName(nombre) {
    console.log(`¡Hola, ${nombre}!`)
}
consolaName("Matias")

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numXTwo(numero) {
    console.log(numero * 2)
}
numXTwo(7)

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
    console.log(`El promedio de los tres numeros es: ${(num1 + num2 + num3)/3}`)
}
promedio(3,6,3)

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorQue(num1, num2) {
    if (num1 > num2) {
        console.log(`El numero: ${num1} es el mayor`)
    } else if (num1 == num2) {
        console.log(`El numero ${num1} y el numero ${num2} son iguales.`)
    } else {
        console.log(`El numero: ${num2} es el mayor`)
    }
}
mayorQue(4,5)

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numXnum(numero) {
    console.log(`La potencia del numero ${numero} es igual a ${numero*numero}`)
}
numXnum(4)