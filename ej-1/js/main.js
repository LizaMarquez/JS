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
