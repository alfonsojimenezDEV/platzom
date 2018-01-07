# Platzom

Platzom es un idioma inventado para el curso de [Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com).

## Descripción del idioma
    - Si la palabra termina en ar, se quitan estas dos letras.
    - Si la palabra empieze por z, se añade pe
    - Si tiene 10 o más letras, se debe partir por la mitad colocando un guión separador en el centro
    - Si la palabra original es un palíndromo, no se tienen en cuenta las reglas anteriores y se deben alternar las letras mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar"); //Program
platzom('Zorro'); //Zorrope
platzom('Zampar'); //Zamppe
platzom("superpalabra"); //superp-alabra
platzom('abecedario') //abece-dario
platzom('sometemos') //SoMeTeMoS
platzom('reconocer') //ReCoNoCeR
```

## Créditos
 - [Alfonso Jiménez](https://twitter.com/aljimeruz)

## Licencia

[MIT](https://opensource.org/licenses/MIT)