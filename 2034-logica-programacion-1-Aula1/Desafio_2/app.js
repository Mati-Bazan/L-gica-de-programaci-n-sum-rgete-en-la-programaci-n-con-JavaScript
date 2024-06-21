// Pregunta al usuario qué día de la semana es.
// Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let day = prompt('Ingrese el dia de la semana: ').toLowerCase();

if (day == 'sabado' || day == 'domingo') {
    alert('¡Buen fin de semana!')
} else {
    alert('Que tengas buen dia')
}


// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let num = prompt('Ingrese un numero')

if (num > 0) {
    alert('El numero es positivo')
} else if (num < 0) {
    alert('El numero es negativo')
} else {
    alert('El numero es cero')
}


// Crea un sistema de puntuación para un juego.
// Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
// En caso contrario, muestra "Intentalo nuevamente para ganar.".

let score = 100;

if (score >= 100) {
    alert ('¡Felicidades, has ganado!')
} else {
    alert ('Intentalo nuevamente para ganar.')
}


// Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
// utilizando un template string para incluir el valor del saldo.

let saldo = 100000
alert (`Su saldo acual es de: ${saldo}$.`)


// Pide al usuario que ingrese su nombre mediante un prompt.
// Luego, muestra una alerta de bienvenida usando ese nombre.

let userName = prompt('Ingrese su nombre:')
alert(`Bienvenido ${userName}`)