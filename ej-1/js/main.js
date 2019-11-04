/*
    =========================
    Comentarios
    =========================
*/

    // Cometario de una línea

    /*
        Comentario
        de
        bloque
    */

/*
    =========================
    Variables
    =========================
*/

    /*
        "var" se usa desde el standard EcmaScript5 (ES5), let y const fueron añadidos desde EcmaScript2015 (ES2015 o ES6).
        
        La declaración de variables con "var", te permite hacer modificaciones en los valores almacenados.
        En el caso de "let", este cambio también es permitido.
        En el "const" hace referencia a una constante, así que el valor de esta no puede ser cambiado una vez sea declarado,
        por otro lado, al declarar una variable como const debes asignarle un valor en ese momento, no después.
        
        const: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.
        var: Es una variable que SI puede cambiar su valor y su scope es local.
        let: Es una variable que también podra cambiar su valor, pero solo vivirá (Funcionará) en el bloque donde fue declarada.

        Sintaxis:
            var [name] = [value];

        Ejemplo:
            var myName = 'Lizbeth';


        Convención para nombre de las variables:
            1. No deben comenzar con un valor númerico.
            2. No usar carecteres especiales (ñ, $, %, etc).
            3. Usar nombres en inglés.
            4. Utilizar formato CamelCase/LowerCase
                - La primer palabra siempre en minúsculas
                - A partir de la segunda palabra con inicial mayúscula.

            Ejemplos:
                var myName = 'Liz';
                var myLasteName = 'Marquez';
    */

/*
    =========================
    Console
    =========================
*/

    /*
        Sintaxis:
            console.log([value]);
            window.console.log([value]);
        
        Ejemplos:
            Enviando un sólo valor:
                console.log('Hola Mundo 2');
                console.log(1234);
                console.log('10' + '5');

            Es posible enviar a la consola más de un valor separados por comas:
                console.log('myNumber', myNumber);
                console.log('myString', myString);
                console.log('Hola', 30, []);
    */


/*
    =========================
    Tipos de Datos
    =========================
*/

    /*
        Valores de cadena de texto (STRING): Estos valores siempre están entre comillas simple o dobles
    */

    var name = 'Liz';
    var lastName = 'Marquez';
    var myAge = '36';


    /*
        Valores numéricos (NUMBER): Estos valores nunca están entre comillas.
    */

    var age = 36;
    var size = 1.60;


    /*
        Valores booleanos (BOOLEAN): Lógicos binarios.
    */

    var falso = false;
    var verdadero = true;


    /*
        --> Arreglos/Vectores/Matrices (ARRAY): Es posible guardar más de un valor
            1. Éstos valores siempre van entre corchetes "[]".
            2. Cada valor debe estar separado por comas.
            3. A todos los valores dentro del arreglo se les asigna un número de índice, el cual siempre emíeza por "0" (cero).
            4. Es posible acceder a un sólo valor, utilzando sú número de índice.
            5. ES posible agregar cualquier tipo de dato (STRING, NUMBER, BOOLEAN, ARRAY, OBJECT, FUNCTION entre otros).
    */

    var myArrray = ['Lunes', 20, [], {}, true]; // Se sugiere nunca combinar distintos tipos de datos.
    var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    // console.log(diasSemana[4]);



    /*
        Objetos (OBJECT): Al igual que los arreglos, es posible almacenar más de un valor, la diferencia es que para acceder a cada valor se utiliza el 
            nombre del valor y no el número de índice.
            1. Éstos valores siempre van entre llaves "{}".
            2. Cada valor debe tener un nombre y cada par nombre/valor debe estar separado por comas.
            3. Es posible acceder a un sólo valor, utilzando el nombre de la propiedad:
                - Utilizando corchetes
                - Notación de puntos
    */

    var myFavoritePerson = {
        name: 'Liz',
        lastName: 'Marquez',
        age: 36,
        height: 1.69,
        job: 'Diseñadora Gráfica',
        isBeautiful: true,
        pets: [
            {
                type: 'Cat',
                name: 'Richard',
                age: 8,
                isItAlife: true,
            },
            {
                type: 'Dog',
                name: 'Rosco',
                age: 3,
                isItAlife: false,
            },
        ],
        boyfriend: {
            name: 'Serch',
            age: 40,
        },
    };

    // console.log(myFavoritePerson['boyfriend']['name']);
    // console.log(myFavoritePerson.boyfriend.name);

    // console.log(myFavoritePerson['boyfriend']['age']);
    // console.log(myFavoritePerson.boyfriend.age);

    // console.log(myFavoritePerson['pets'][1]['name']);
    // console.log(myFavoritePerson.pets[1].name);


/*
    =====================================
    Estructura de control (if ... else)
    =====================================
*/

    /*
        Sintaxis:
            La condicional que recibe ésta estructura de control siempre va a ser un valor booleano (BOOLEAN)

            if([condiciona]) {
                Código que se va a ejecutar si la condicional es igual a "true"
            } else {
                Código que se va a ejecutar si la condicional es igual a "false"
            }
    */

/*
    if(false) {
        alert('La condicional es verdadera');
    } else {
        alert('La condicional es falsa');
    }
*/

/*
    var num1 = 20;
    var num2 = '20';

    if(num1 === num2) {
        alert(num1 + ' es igual a ' + num2);
    } else {
        alert(num1 + ' es diferente a ' + num2);
    }
*/

/*
    var num1 = 10;
    var num2 = 20;
    var num3 = 30;
    var num4 = 40;

    var comprobacion1 = (num1 + num3) === num2;
    var comprobacion2 = (num4 - num3) === num1;

    var comprobacionFinal = comprobacion1 && comprobacion2;
    console.log('comprobacionFinal', comprobacionFinal);
*/



var nombreUsuario = 'sergio.perez@msn.com';
var contraseña = 'Serch23';
/*
if ((nombreUsuario !== '') && (contraseña !== '')) {
    console.log('Se validan credenciales en la DB');
} else {
    console.log('Se notifica al usuario que ambos campos son obligatorios');
}
*/

/*
    =====================================
    Iterador, Bucle o Ciclo "for"
    =====================================
*/

/*
    Sintaxis:
        * Entre los parentesis se ejecutan 3 sentencias:
            1. Se crea la variable inicial: var nombreVariableInicial = 0;
            2. Se verifica la condicional: Esto devolverá un valor booleano (BOOLEAN)
                - true: En este caso se ejecuta el código que está entre las llaves.
                - false: Se detiene el ciclo.
            3. Se modifica la variable inicial
                nombreVariableInicial++


            1. Se ejecuta la "sentencia 1". Esta sentencia no se vuelve a ejecutar,
                ya que sólo se ejecuta en la el primer ciclo.
            2. Se verifica la validación de la "sentencia 2":
                Si obtenemos "false" se ejecuta el código del ciclo.
                Si obtenemos "true" se detiene el ciclo y ya no se ejecuta nada.
            3. Se ejecuta la "sentencia 3"
            4. Se repite paso número 2
            

        for (var indice = 0; indice < 10; indice++) {
            // Codigo que se va a ejecutar por cada iteración
        }

*/

var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
var cuantosDiasHay = diasSemana.length;

console.log('cuantosDiasHay', cuantosDiasHay);

/*
        El tipo de valor ARRAY, tiene una propiedad llamada "length"
            que no nos devolverá el número de elementos o valores que 
            tiene un arreglo (ARRAY).
*/



for (var indice = 0; indice < cuantosDiasHay; indice++) {
    console.log('Hoy es: ', diasSemana[indice] );
}

