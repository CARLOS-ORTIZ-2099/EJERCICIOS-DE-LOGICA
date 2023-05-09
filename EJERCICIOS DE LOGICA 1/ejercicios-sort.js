let personas = [
    { nombre: 'Juan', edad: 35 },
    { nombre: 'María', edad: 24 },
    { nombre: 'Pedro', edad: 42 },
    { nombre: 'Ana', edad: 19 }
  ];
  personas.sort((a, b) => a.edad - b.edad);

  console.log(personas)



  const numeros = [4, 2, 7, 1, 3];
  numeros.sort((a, b) => a - b);
  console.log(numeros); // Output: [1, 2, 3, 4, 7]


  /* vamos a detallar el proceso de ordenamiento que utiliza el método sort en Javascript.

    Cuando se invoca el método sort en un array, este ordena los elementos del array según
    sus valores. En términos generales, el método realiza los siguientes pasos:

    Compara dos elementos adyacentes del array.
    Si el primer elemento es mayor que el segundo, los intercambia.
    Repite el proceso hasta recorrer todo el array.
    Repite los pasos 1 a 3 varias veces, hasta que el array esté completamente ordenado.
    Por ejemplo, si tenemos el siguiente array: [4, 2, 7, 1, 3], el método sort lo ordenaría de la siguiente
    manera:

    Compara el primer y segundo elemento (4 y 2). Como 4 es mayor que 2, los intercambia. El array ahora es [2, 4, 7, 1, 3].
    Compara el segundo y tercer elemento (4 y 7). Como 4 es menor que 7, no los intercambia. El array sigue siendo [2, 4, 7, 1, 3].
    Compara el tercer y cuarto elemento (7 y 1). Como 7 es mayor que 1, los intercambia. El array ahora es [2, 4, 1, 7, 3].
    Compara el cuarto y quinto elemento (7 y 3). Como 7 es mayor que 3, los intercambia. El array ahora es [2, 4, 1, 3, 7].
    Repite los pasos 1 a 4 varias veces, hasta que el array esté completamente ordenado: [1, 2, 3, 4, 7].
    En cuanto a otros usos del método sort, se puede utilizar para ordenar arrays de objetos según una propiedad específica, por ejemplo. En este caso, se debe proporcionar una función de comparación que indique cómo se deben comparar los elementos del array. */




    /* Entonces, en términos generales, el método sort no solo recorre el array una vez, sino que utiliza un algoritmo más complejo
       para ordenar los elementos. En la práctica, el número de comparaciones y recorridos que realiza el método depende del tamaño del
       array y de los valores que contenga. */
