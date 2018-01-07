'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
/* 
    Invención de un idioma según una serie de reglas.
    1.- Si la palabra termina en ar, se quitan estas dos letras.
    2.- Si la palabra empieze por z, se añade pe
    3.- Si tiene 10 o más letras, se debe partir por la mitad colocando un guión separador en el centro
    4.- Si la palabra original es un palíndromo, no se tienen en cuenta las reglas anteriores y se deben alternar las letras mayúsculas y minúsculas
*/

function platzom(str) {
    var translation = str;

    //PRIMERA CONDICION

    //El método endsWith nos devuelve verdadero si una cadena 'termina' en los caracteres que le indiquemos
    //Se hace primero una conversión a minúsculas para evitar tener que preguntar por AR. 
    if (str.toLowerCase().endsWith('ar')) {
        //slice nos permite 'cortar caracteres' desde una posición y una longitud de caracteres.
        //al poner el número en negativo está empezando por el final.
        translation = str.slice(0, -2);
    }

    //SEGUNDA CONDICION
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //TERCERA CONDICION
    //Como translation.length lo vamos a usar muchas veces, lo sacamos fuera
    var length = translation.length;

    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2)); //al no indicar el segundo parámetro en slice se entiende que es hasta el final
        //translation=firstHalf + '-' + secondHalf //Esto es más interesante ponerlo como sigue
        translation = firstHalf + '-' + secondHalf;
    }

    //CUARTA CONDICION
    //Javascript no tiene una función para cadenas de caracteres que devuelva al revés dicha cadena
    //pero sí de un array.
    //Lo que tendremos que hacer es convertir la cadena de caracteres en un array. Para ello se utiliza
    //la función split(param). Esta función devuelve un array con todos los caracteres de la cadena separados
    //por el caracter que le pasemos como parámetro. Si el parámetro que le pasamos es '', entonces nos 
    //devuelve un array con todos y cada uno de los caracteres de la cadena pero sin separar.
    //Por ejemplo: "alfonso".split('') nos devuelve
    //["a", "l", "f", "o", "n", "s", "o"] //Esto lo he probado en Console del Chrome.
    //Lo contrario, es decir, convertir los elementos de un array en una cadena, se consigue con la función
    //join(param). El parámetro será el caracter separador que queramos colocar. Si ponemos '', simplemente
    //devuelve la cadena completa sin espacios.

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    //reverse() nos devuelve los elementos de un array al reves, que era lo que queríamos.

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str == reverse(str)) {
        //Es un palíndromo
        return minMay(str);
    }

    return translation;
}