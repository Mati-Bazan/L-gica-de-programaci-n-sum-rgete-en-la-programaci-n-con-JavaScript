// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada
//"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java')
lenguagesDeProgramacion.push('Ruby')
lenguagesDeProgramacion.push('GoLang')

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista() {
    console.log(lenguagesDeProgramacion)
}
mostrarLista()

// Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion en orden inverso.
function ordenInverso(lista) {
    console.log(lista.reverse())
}
ordenInverso(lenguagesDeProgramacion)

// Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(numLista) {
    let total = numLista.reduce(
        (sum, item) => sum + item , 0
    );
    console.log(`El promedio es: ${total/(numLista.length)}`)
}
promedioLista([1,2,3,4,5,6])
promedioLista([5,5,5,5,5])

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function maxYMin(listaNumeros) {
    console.log(`El numero mas grande es: ${Math.max(...listaNumeros)}, el numero mas pequeño es: ${Math.min(...listaNumeros)}`)
}
maxYMin([1,2,3,4,5,8,11,7])

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(lista) {
    let total = lista.reduce(
        (sum, item) => sum + item , 0
    );
    console.log(`La sumatoria de la lista es ${total}`)
}
sumaLista([2,4,5,6,7])

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
// o -1 si no existe en la lista.
function posicion(item, lista) {
    if (lista.includes(item)) {
        console.log(lista.indexOf(item))
    } else {
        console.log(-1)
    }
}
posicion(4, [1,2,3,4,5,6])
posicion(7, [1,2,3,4,5,6])

// Crea una función que reciba dos listas de números del mismo tamaño
// y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaTwoList(lista1, lista2) {
    let newList = []
    if (lista1.length == lista2.length) {
        for (let i = 0; i < lista1.length; i++) {
            newList.push(lista1[i]+lista2[i])
        }
    } else {
        console.log("las listas no son iguales")
    }
    console.log(newList)
}
sumaTwoList([1,2,3,4],[1,2,3,4])
sumaTwoList([1,2,3,4],[1,2,3,4,5])

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaAlCuadrado(lista) {
    let nuevaLista = []
    for (let i = 0; i < lista.length; i++) {
        nuevaLista.push(lista[i]**2)
    }
    console.log(nuevaLista)
}
listaAlCuadrado([1,2,3,4,5])