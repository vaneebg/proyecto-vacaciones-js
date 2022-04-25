// 1. Bucles
// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.
let number;
for (number = 4; number < 10; number++) {
    console.log("Del 4 al 9", number)
}
// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
let impar;
for (impar = 3; impar < 18; impar++) {
    if (impar % 2 != 0) {
        console.log("números impares del 3 al 17", impar)
    }
}
// otro método
let impar2;
for (impar2 = 3; impar2 < 18; impar2 += 2) {

    console.log("números impares del 3 al 17 forma 2", impar2)

}
// ---------------------------------------------------

// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [{
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

console.log("array gente", gente)

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.
Mayor25 = [];
for (let persona of gente) {
    if (persona.edad > 25) {
        console.log("persona", persona)
        Mayor25.push(persona)
    }


}
console.log("array mayor 25", Mayor25)

// Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.
GenteJ = [];
for (let persona of gente) {
    if (persona.nombre.startsWith("J")) {
        console.log("persona con J", persona)
        GenteJ.push(persona)
    }


}
console.log(GenteJ)

// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
gente4letras = [];
for (let persona of gente) {
    if (persona.nombre.length == 4) {
        console.log("personas con 4 letras", persona)
        gente4letras.push(persona)
    }


}
console.log(gente4letras)
    // Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
gente4letras40años = [];
for (let persona of gente) {
    if (persona.nombre.startsWith("J") && persona.edad < 40) {
        console.log("personas con nombre por J y menos de 40 años", persona)
        gente4letras40años.push(persona)
    }


}
console.log(gente4letras40años)
    // ---------------------------------------------------

// 2.Objetos
// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
console.log("Ahora va objeto ordenador")
const ordenador = {
        marca: "La pava",
        tipo: "portátil",
        perifericos: ["raton", "touchPad"],
        almacenamiento: {
            discos: ["SDD", "HDD"],
            maestro: 0
        },
    }
    // TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// ---------------------------------------------------

// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'
console.log("ahora toca objeto obj")
const obj = {
        a: {
            b: true,
            c: ["hola", 23],
        },
        d: 6,
        f: "holi"
    }
    // TEST 1
if (typeof obj === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2
if (typeof obj.a.b === "boolean") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 7
if (obj.f.length === 4) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


// ---------------------------------------------------
console.log("Ahora va la array arr")
    //     // Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
arr = [
    array1 = {
        name: "pepito",
        age: 25,
    },
    array2 = {
        name: "pepito",
        age: 20,
    },
    array3 = {
        name: "J",
        age: 18,
    }
]
console.log("arr objeto ", arr)


// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// ---------------------------------------------------

// 3.Funciones
// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
console.log("function converteString")



function convierteString(a) {
    console.log("este es el tipo de dato que introduces:", typeof a)
    if (typeof a === "number") {

        a = String(a)

        console.log("tú dato ya está convertido a string, ahora este es su tipo:", typeof a)
        return `tu string: ${a} `
    } else {
        return "Debo ser ejecutada con un número"
    }
}
console.log(convierteString(9))
console.log(convierteString("hola"))
    // Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log("function caracterInicial")


function caracterInicial(a) {
    console.log("tú tipo de dato es:", typeof a)
    if (typeof a === "string") {
        if (a != "") {
            return `este es su primer caracter ${a.charAt(0)}`
        } else {
            return "Debo ser ejecutada con un string no vacío"
        }
    } else {
        return "debo ser ejecutada con un string"
    }
}


console.log(caracterInicial("jelou"))
console.log(caracterInicial(""))
console.log(caracterInicial(7))


// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log("function ultimoCaracter")


function ultimoCaracter(a) {
    console.log("tú tipo de dato es:", typeof a)
    if (typeof a === "string") {
        if (a != "") {
            return `este es su último caracter  ${a.charAt(a.length - 1)}`
        } else {
            return "Debo ser ejecutada con un string no vacío"
        }
    } else {
        return "debo ser ejecutada con un string"
    }
}
console.log(ultimoCaracter("hola a todos"))
console.log(ultimoCaracter(10))
console.log(ultimoCaracter(""))

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
console.log("functioncuentaCaracteres")


function cuentaCaracteres(a) {
    console.log("tu tipo de dato introducido es:", typeof a)
    if (typeof a === "string") {

        a = Number(a.length)

        console.log("tú dato ya está convertido a number, ahora este es su tipo:", typeof a)
        return `tu number con el número de carácteres: ${a}`
    } else {
        return "Debo ser ejecutada con un string"
    }
}
console.log(cuentaCaracteres("pueblo"))
console.log(cuentaCaracteres(6))

// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
console.log("function getCiudadesOrdenada")



function getCiudadesOrdenada(a) {
    if (typeof a != "string" || a.includes(",") === false) {
        return "no es un formato correcto"
    } else {
        const arrayCiudades = a.split(",")
        return arrayCiudades.sort()
    }

}
console.log(getCiudadesOrdenada("berlin valencia castellón"))
console.log(getCiudadesOrdenada("berlin,valencia,castellón,bocairent"))
    // si se ponen con espacios, no los ordena bien, mete los espacios antes


// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
console.log("function esPalindromo")


function esPalindromo(a) {
    if (typeof a != "string" || a === "") {
        return "no es un formato correcto"
    } else if (a === a.split("").reverse().join("")) {
        return "es una palabra palíndroma"
    } else {
        return "no es palíndroma"
    }

}
// Para invertir una cadena, primero  split() para convertirla en un objeto Después de eso, reverse() para invertir una cadena(no va con cadenas por eso transformo a objeto).  Para convertir este objeto de nuevo en una cadena,  join()

console.log(esPalindromo("rallar"))
console.log(esPalindromo(""))
console.log(esPalindromo("hola"))
console.log(esPalindromo(7))


// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
console.log("function getPrecioMostrar")

function getPrecioMostrar(a) {
    if (typeof a === "number") {
        a = a.toFixed(2)
        console.log("Ahora es un dato de tipo:", typeof a)
        return `${a} €`
    } else {
        return "no es un formato correcto"
    }

}

console.log(getPrecioMostrar(7.457))
console.log(getPrecioMostrar("hola"))
    // Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
console.log("function division")

function division(a, b) {
    return a / b
}
console.log(division(8, 4))
    //  Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

console.log("function esPar")



function esPar(a) {
    if (a % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(esPar(8))
console.log(esPar(7))
    // Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor


console.log("function ordenarArray2")


function ordenarArray2(a) {
    return `Array2 de mayor menor ${a.sort((a, b) => b - a)}`
}
console.log(ordenarArray2([1, 4, 2, 5, 3]))
    // Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares


console.log("function obtenerImpares")




function obtenerImpares(array) {
    const Impares = []
    for (let numero of array) {
        console.log(numero)
        if (numero % 2 != 0) {
            Impares.push(numero)
        }

    }
    return `tu array de números impares ${Impares}`
}
console.log(obtenerImpares([1, 10, 15, 20, 23, 25]))

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
console.log("function sumarArray")

let sum = 0;

function sumarArray(arrayNumerico) {
    for (let i = 0; i < arrayNumerico.length; i++) {
        sum += arrayNumerico[i];
    }
    return `la suma total de la array es ${sum}`
}
console.log(sumarArray([4, 5, 1]))
    // Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
console.log("function multiplicarArray")

let multi = 1;

function multiplicarArray(arrayNumerico) {
    for (let i = 0; i < arrayNumerico.length; i++) {
        multi *= arrayNumerico[i];
    }
    return multi;
}
console.log("el resultado de la multiplicacion es", multiplicarArray([4, 2]))
    // Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
console.log("functionNumerosMayor5")

const arrayMasCinco = []

function NumerosMayor5(a) {
    for (let number of a) {
        if (number >= 5) {
            arrayMasCinco.push(number)
        }
    }
    return arrayMasCinco
}
console.log(NumerosMayor5([1, 2, 5, 6, 7]))
    // Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
    // Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
console.log("app numero primo")



function NumeroPrimo(n) {
    n = prompt("Dime un numero")
    n = Number(n)
        // prompt lo coge pero en formato string, hay que convertirlo
    console.log("el tipo de dato ahora es", typeof n);

    for (var i = 2; i < n; i++) {

        if (n % i === 0) {
            console.log("false")
            return false;
        }

    }

    if (n === 1) {
        console.log("false");
        return false;
    } else {
        console.log("true");
        return true;
    }

}

// Por definición, el 0 y el 1 no son primos. El 4 caso especial para el algoritmo, al dividir 4 entre 2, el ciclo no se cumple y diría que el 4 sí es primo, cosa que es errónea.
// Si no se pudo dividir por ninguno de los de arriba, sí es primo


// Crea una función checkPassword con una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

console.log("function checkpassword")
const contra = "12345ciberseguridad"
let contadorError = 0;

function checkPassword(a) {
    a = prompt("Pon tu contraseña")
    if (contra === a) {
        alert("Enhorabuena, te sabes la súper contra")
    } else {

        while (contra != a && contadorError < 2) {
            a = prompt("Vuelve a intentarlo")
            if (a === contra) {
                alert("Adivinaste la contra")
            } else {

                contadorError++;
                alert("Vuelve a intentarlo")
            }
            if (contadorError === 2) {
                alert("Intentos máximos alcanzados")
            }
        }
    }
}


// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
// +: suma los dos operadores.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.
console.log("calculadora inversa")

function CalculadoraInversa(a, b, c) {
    a = document.getElementById("number1").value;

    //    console.log(a) nos dice que es un object, y lo que nos interesa es el valor de ese, accedemos a su propiedad

    c = document.getElementById("operacion").value;
    b = document.getElementById("number2").value;
    a = Number(a);
    b = Number(b);
    c = String(c);



    switch (c) {
        case "+":
            let suma = a + b
            console.log(suma)

            break;

        case "-":
            let resta = a - b
            console.log(resta)
            break;

        case "*":
            let multi = a * b
            console.log(multi)
            break;

        case "/":
            let div = a / b
            console.log(div)
            break;

        case "**":
            let exp = a ** b
            console.log(exp)
                // la ^ no la reconoce, es **
            break;
        case "%":
            let resto = a % b
            console.log(resto)
            break;

    }
}