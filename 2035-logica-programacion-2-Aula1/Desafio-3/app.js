// Crea una función que calcule el índice de masa corporal (IMC) de una persona
// a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function IMC(peso, altura) {
    let resultado = peso / (altura)**2
    return `El IMC de la persona es: ${resultado}`
}
console.log(IMC(68, 1.65))

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero) {
    let result = numero;
    if (numero < 1) 
        return 1; 
    while (numero > 1) { 
        numero--;
        result *= numero;
    }
    return result;
}
console.log(factorial(6))

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente
// en reales(moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país).
// Para esto, considera la cotización del dólar igual a R$4,80.
function usdToReal(usd) {
    return usd * 5.39 // 5.39 Real brasileño dia de la fecha
}
console.log(usdToReal(15))

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// utilizando la altura y la anchura que se proporcionarán como parámetros.
function area(alto, ancho) {
    let area = alto * ancho
    let perimetro = (alto*2) + (ancho*2)
    alert(`El area de la sala es: ${area}(m)2, y el perimetro es: ${perimetro}m`)
}
area(4,5)

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaCircular(radio) {
    let pi = 3.14
    let area = pi * (radio**2)
    let perimetro = 2 * pi * radio
    alert(`El area del circulo es: ${area}(m)2, y su perimetro es: ${perimetro}m`)
}
areaCircular(5)

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro
function tablDeMultiplicar(numero) {
    alert(`tabla de multiplicar: ${numero}
        ${numero} x 1 = ${numero * 1}
        ${numero} x 2 = ${numero * 2}
        ${numero} x 3 = ${numero * 3}
        ${numero} x 4 = ${numero * 4}
        ${numero} x 5 = ${numero * 5}
        ${numero} x 6 = ${numero * 6}
        ${numero} x 7 = ${numero * 7}
        ${numero} x 8 = ${numero * 8}
        ${numero} x 9 = ${numero * 9}
        ${numero} x 10 = ${numero * 10}`)
}
tablDeMultiplicar(5)