/* Escribe una función que tome dos cadenas como argumentos y determine si son anagramas entre sí.
   Un anagrama es una palabra o frase formada reorganizando las letras de otra, como "cinema" a 
   partir de "iceman". 
   
*/

// PRIMERA FORMA DE HACERLO 

let leterONe='hoja'
let leterTwo ='joha'



  function anagramas(x,y){
        let one = x.split('')
        let two = y.split('')
            const uno = one.sort()
            let l1 = uno.toString().replace(/,/g,'')
            const dos = two.sort()
            let l2 = dos.toString().replace(/,/g,'')
   
          return l1 === l2  
  }

   console.log(anagramas(leterONe,leterTwo))



// SEGUNDA FORMA DE HACERLO

  function anagramasImperativo(a,b){

      if(a.length != b.length) return console.log(`no tienen la misma longitud`)

      const firstLeter =  a.split('').sort(),     
            secondLeter = b.split('').sort()

      let count = 0
      for (let i = 0; i < firstLeter.length; i++) {
          firstLeter[i] == secondLeter[i] ? count++ : ''
        
      }

      if(count == firstLeter.length){
        return console.log(`es anagrama`)

      }
      else {
        return console.log(`no es anagrama`)
      }



  }

  anagramasImperativo(leterONe,leterTwo)





// TERCERA FORMA DE HACERLO IA
/* function anagramas(word1, word2) {
    // Si las palabras no tienen la misma longitud, no pueden ser anagramas
    if (word1.length !== word2.length) {
      return false;
    }
  
    // Creamos objetos que contengan la cantidad de veces que aparece cada letra en cada palabra
    const count1 = {};
    const count2 = {};
    for (let letter of word1) {
      count1[letter] = (count1[letter] || 0) + 1;
      count1[letter]? count1[letter]++:count1[letter]=1
    }
    for (let letter of word2) {
      count2[letter] = (count2[letter] || 0) + 1;
    }
  
    // Comparamos los objetos que contienen los conteos de letras para determinar si son anagramas
    for (let letter in count1) {
      if (count1[letter] !== count2[letter]) {
        return false;
      }
    }
  
    // Si llegamos aquí, las palabras son anagramas
    return true;
  }
  
  console.log(anagramas(leterONe,leterTwo))
  
*/





/* Escribe una función que tome un número entero como argumento y genere la secuencia de números de Fibonacci hasta
   ese número. La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números
   anteriores. La serie comienza con 0 y 1.
*/

let numeroIniciales

function fibonacci(N){

    numeroIniciales = [0,1]

    for(let i = 0; i < numeroIniciales.length; i++){
        let fx =  numeroIniciales[i] + numeroIniciales[numeroIniciales.length-1]
          numeroIniciales.push(fx)
        if(numeroIniciales.length > N){
          break
        }
    }
        // numeroIniciales[numeroIniciales.length-1]!== N ? numeroIniciales.pop():''
return numeroIniciales

}

    console.log(fibonacci(10))




/* Escribe una función en JavaScript que reciba un arreglo de números y devuelva el número mayor y menor del arreglo.

  Ejemplo:
  Si el arreglo es [3, 0, 9, 2, -1], la función debería devolver {max: 9, min: -1}.

  Nota: No utilices la función integrada de JavaScript Math.max() y Math.min(). 
  
*/


let Array1=[3, 0, 9, 2, -10]


function Mayor_Menor(e){
  
let Menor = e.reduce((a,b)=> a < b ? a : b )

let Mayor = e.reduce((a,b)=> a > b ? a : b)


return {Mayor,Menor}

}

console.log(Mayor_Menor(Array1))





/* Escribe una función que tome un número entero como entrada y devuelva una lista de todas las parejas de números enteros
   únicos cuya suma sea igual al número ingresado. Los números en la lista deben estar en orden creciente y cada pareja debe
   estar en orden ascendente con respecto a los demás. Por ejemplo, si la entrada es 7, la salida debería ser [[1, 6],[2, 5],[3, 4]].

   Puedes suponer que la entrada es un número entero positivo mayor que cero.
 */





   let numeroObjetivo = 7

   function paresPosibles(element){
        let particionNumeros = []
        let combinaciones = []
   
        for(let i = 1; i < element ; i++){
             particionNumeros.push(i)
        }
          console.log(particionNumeros)

        for(let x = 0; x < particionNumeros.length; x++){
           
          for(let y = x+1; y < particionNumeros.length; y++){
                particionNumeros[x] + particionNumeros[y] === element ? combinaciones.push([particionNumeros[x],particionNumeros[y]]):'' 
         
          }
        }
         
         return console.log(combinaciones)
   }
   
     paresPosibles(numeroObjetivo)








const nuevoNumero = 21

const nuevoArrayNumero = []




// solucion IA

function parejas(e) {
  let Array2 = [];
  for (let i = 1; i <= Math.ceil(e/2); i++) {/*CON EL METODO CEL ME ASEGURO DE QUE SOLO TENGA EN MI ARRAY LA MITAD DE LOS NUMEROS ASI
                                               EVITO DUPLICADO A LA HORA DE HACER PAREJAS, ASI MISMO ITERO MENOS VECES EL ARRAY       */
    Array2.push(i);
  }
  let rx = [];
  for (let x = 0; x < Array2.length; x++) {/* ANIDAMOS UN FOR DENTRO DE OTRO FOR, RECALCAR QUE POR CADA ITERACION DEL FOR PADRE EL FOR 
                                              ANIDADO SE EJECUTA COMPLETO */
    for (let y = x; y < Array2.length; y++) {
      if (Array2[x] + Array2[y] == e) {
        rx.push([Array2[x], Array2[y]]);
      }
    }
  }
  return rx;
}
[1,2,3]
console.log(parejas(7));
// output: [[1, 6], [2, 5], [3, 4]]




/* Escribe una función que tome como entrada una cadena de texto y devuelva la palabra más larga en la cadena.
   Si hay varias palabras con la misma longitud máxima, la función debe devolver la primera palabra encontrada.

  Por ejemplo, si la entrada es "Hola mundo, estoy aprendiendo JavaScript", la función debería devolver
  "aprendiendo". 
*/


function palabraLarga(Palabra){
  const palabras =  Palabra.split(' ')
  const palabraMasLarga = palabras.reduce((a,b)=> a.length > b.length ? a : b,'' ) 

    return palabraMasLarga
}
/*se agrega una cadena vacía como valor inicial para reduce(), lo que significa que si palabra es un arreglo vacío,
  la función devolverá una cadena vacía en lugar de un error.
*/

console.log(palabraLarga(`Hola mundo, estoy aprendiendo javascript y +ecmascript6`))



function ordenPalabras(e){
    for(i = e.length-1; i >= 0 ;i--){
        console.log(e[i])
    }

}

  ordenPalabras(`hola mundo`)







// Encontrar la subsecuencia más larga 

/* Dada una lista de números enteros, encuentra la subsecuencia más larga tal que cada elemento de la subsecuencia 
   es mayor que el anterior.
   Por ejemplo, dada la lista [3, 10, 2, 1, 20], la subsecuencia más larga es [3, 10, 20]. 
   
*/  
  
   
   let subsecuencia1 = []

  function subcadena(elements){
   
   subsecuencia1.push(elements[0])
   
    for(i = 1; i < elements.length; i++){
      if(elements[i] > subsecuencia1[subsecuencia1.length-1] ){
          subsecuencia1.push(elements[i])
      }

    }

    return subsecuencia1
  }
  
  console.log(subcadena([3, 10, 2, 1, 20,1]))



/* Escribe una función que tome una matriz de números enteros y devuelva la longitud de la subsecuencia creciente más
   larga. Por ejemplo, dada la matriz [[3, 4, 5], [3, 2, 6], [2, 2, 1]], la subsecuencia creciente más larga es [3, 4, 5, 6],
   por lo que la función debe devolver 4. 
   
*/

let subsecuencia2=[[1,2,3],[10,20,30,40],[100,90],[4,5,6,7,8,9]]

function larga(ex){
    const nuevoValor = ex.reduce((a,b)=> a.length > b.length ? a.length : b.length )  



     return nuevoValor
}

console.log(larga(subsecuencia2))



/* Ejercicio: Dada una lista de números enteros, escribe una función que devuelva la suma de los valores máximos
   de cada sublista. Por ejemplo, dada la lista [[1, 2, 3], [4, 5, 6], [7, 8, 9]], la función debe devolver la
   suma 3 + 6 + 9 = 18. 
   
*/

  let array=[[1, 80, 70], [4, 7, 6], [7, 8, 12,5,1]] 


  function sumaUltimos(e){
      sum = 0
      for(let i = 0; i < e.length; i++){
        sum+= Math.max(...e[i])
      }
       
      return sum

  }

   console.log(sumaUltimos(array))





/* el problema trata de encontrar todos los pares de puntos que estén a una distancia menor o igual a d.
   En este caso, los puntos son (1, 2), (3, 4), (6, 8), (9, 10) y la distancia d es 3.

   Por ejemplo, para el primer par de puntos, (1, 2) y (3, 4) están a una distancia de:

   d = sqrt((3-1)^2 + (4-2)^2) = sqrt(8) ≈ 2.83

   Como 2.83 es menor que 3, entonces este par de puntos cumple con la condición y se incluye en la respuesta.
   Luego se realiza el mismo cálculo para los otros pares de puntos hasta que se hayan revisado todos los pares
   posibles. En este caso, los pares que cumplen la condición son: [(1, 2), (3, 4)], [(3, 4), (6, 8)], y [(6, 8), (9, 10)].
   
*/



  /* Usando los puntos que me diste [(1, 2), (3, 4), (6, 8), (9, 10)] tendríamos:

    La distancia entre (1, 2) y (3, 4) sería:
    d = √((3 - 1)^2 + (4 - 2)^2) = √8 ≈ 2.828

    La distancia entre (3, 4) y (6, 8) sería:
    d = √((6 - 3)^2 + (8 - 4)^2) = √68 = 5

    La distancia entre (6, 8) y (9, 10) sería:
    d = √((9 - 6)^2 + (10 - 8)^2) = √13 ≈ 3.606  */

  // MATH.POW Devuelve el valor de una expresión base elevada a una potencia especificada.


  let cartesiano = [[1, 2], [3, 4], [-1, 1], [1, 1]]
  let distancia = 3

  const Cartesiano = (cartesiano,dist)=>{
    let nuevo = []
    
    for(i = 0; i < cartesiano.length-1; i++){
          let p1 = Math.pow(cartesiano[i+1][0] - cartesiano[i][0],2)
          let p2 = Math.pow(cartesiano[i+1][1] - cartesiano[i][1],2)

          let sum = p1 + p2

          let result= Math.sqrt(sum)
          
          if(result<dist) nuevo.push(cartesiano[i],cartesiano[i+1])
        
    }

       return  nuevo
      
  }

  console.log(Cartesiano(cartesiano,distancia))
 




/* Se te da una matriz cuadrada de números enteros. Tu tarea es determinar si la matriz es un cuadrado mágico 
   o no.
   Un cuadrado mágico es una matriz en la que la suma de cada fila, cada columna y ambas diagonales es la misma.
   Por ejemplo, la siguiente matriz es un cuadrado mágico: 
   
*/



const matriz = [[4, 9, 2],
                [3, 5, 7],
                [8, 1, 6]
                         ]

function escuadradomagico(matriz){                         
      let fila1 = 0
      let fila2 = 0
      let fila3 = 0
      let columna1 = 0
      let columna2 = 0
      let columna3 = 0
      let diagonal1 = 0
      let diagonal2 = 0
      let t = matriz.length-1

      for( i = 0; i < matriz.length; i++){

          columna1+= matriz[i][0]
          columna2+= matriz[i][1]
          columna3+= matriz[i][2]

          diagonal1+= matriz[i][i]
          diagonal2+= matriz[i][t]
      
          t-- // dismunimos la variable a medida que vamos avanzando en la matriz 
          switch(i){
              case(0):
                  for(let x = 0; x < matriz[i].length; x++){
                        fila1+= matriz[i][x]        
                  }  
              break;
                
              case(1):
                  for(let y = 0; y < matriz[i].length; y++){
                        fila2+= matriz[i][y]     
                  }
              break;

              case(2):
                  for(let z = 0; z < matriz[i].length; z++){
                      fila3+= matriz[i][z]     
                  }
              break;
          }

      }


}

escuadradomagico(matriz)




/* Escribe una función que tome como parámetro un objeto con información de una persona y devuelva un array con los 
   nombres de los amigos de esa persona que tengan más de 25 años.
*/


  const Personas = {
    nombre: 'Juan',
    edad: 30,
    amigos: [
      { nombre: 'pedro', edad: 28 },
      { nombre: 'maria', edad: 23 },
      { nombre: 'Pablo', edad: 25 },
    ]
  };
  



function obtenerAmigosMayores(personas){
    let almacenador
    let valor = []
    for(let persona in personas){

      if(typeof personas[persona] === 'object'){

        console.log(almacenador = personas[persona])

          for(let x = 0; x < almacenador.length; x++){
                almacenador[x]['edad'] > 23 ? valor.push( almacenador[x]['nombre']) :''
          }

      }
    }

    return valor


    
    
}

console.log(obtenerAmigosMayores(Personas))


//dame otro ejercicio para mejorar mi logica de programacion y analisis en js

// solucion IA

/* function obtenerAmigosMayores(personaS){
  const amigosMayores = personaS.amigos.filter((amigo) => amigo.edad > 25);
  console.log(amigosMayores)
  const nombresAmigosMayores = amigosMayores.map((amigo) => amigo.nombre);
  return nombresAmigosMayores;
}

console.log(obtenerAmigosMayores(personaS)); */





/* Crea una función que reciba un array de objetos que representan libros, La función debe devolver un nuevo array con los títulos
   de los libros que no han sido leídos, y cada título debe estar en mayúsculas. Por ejemplo, para el array de libros anterior, la
   función debería devolver ["CIEN AÑOS DE SOLEDAD"], ya que es el único libro que no ha sido leído.
 */


const Libros = [
  {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    paginas: 672,
    leido: true
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 471,
    leido: false
  },
  {
    titulo: "La isla del tesoro",
    autor: "Robert Louis Stevenson",
    paginas: 304,
    leido: true
  },
  // Agrega más libros si lo deseas
];


function libros(books){
  let N = []
  for(let book in books){
      books[book]['leido'] === false ? N.push(books[book]['titulo'].toUpperCase()):''
  } 
  return N
}

 console.log(libros(Libros))



/* Escribe una función que tome un número entero positivo y genere una matriz cuadrada (es decir, una matriz con el mismo
   número de filas y columnas) de ese tamaño. La matriz debe estar formada por ceros en su diagonal principal y por unos en
   cualquier otra posición. Por ejemplo, si el número de entrada es 4, la matriz resultante debería ser:
[
  [0, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 0]
]

*/ 


 let numero = 9


function matrizNueva(Numero) {
 
  const nuevoAr = []
  console.log(nuevoAr.length)

  for (let i = 0; i < Numero; i++) {
      nuevoAr.push([])
      for(let j = 0 ; j < Numero; j++){
        nuevoAr[i].push(1)
      }
  
  }

  for(let indice in nuevoAr){
    nuevoAr[indice][indice] = 0
  }

  console.log(nuevoAr)

}
 
matrizNueva(numero)





/* Escribe una función que tome una matriz cuadrada de números enteros y calcule la suma de los elementos en cada diagonal.
   La matriz puede tener cualquier tamaño, pero se considerará que una matriz de tamaño 0 tiene una suma diagonal de 0. Por
   ejemplo, si la matriz de entrada es:

  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  la función debería devolver [15, 15], que corresponde a la suma de la diagonal de izquierda a derecha (1 + 5 + 9 = 15) y la suma
  de la diagonal de derecha a izquierda (3 + 5 + 7 = 15).


*/




let Matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [2, 8, 9]
]


function matriz3(matriz2){


    let der = 0
    let izq = 0
    let x = 0
    let y = 0
    let array3 = []



    for (let d = 0; d < matriz2.length; d++) {
      der += matriz2[d][x];
      x++
    };





    for (let i = matriz2.length - 1; i >= 0; i--) {
      izq += matriz2[i][y];
      y++
    }

    array3.push(der, izq)

    return console.log(array3)

}


matriz3(Matriz2)





/* Escribe una función que reciba una cadena de texto y devuelva la palabra más larga de esa cadena. Si hay varias palabras
   con la misma longitud, devuelve la que aparece primero en la cadena. Puedes suponer que la cadena de entrada está formada solo
   por letras minúsculas y espacios en blanco.
*/

let Palabra = "hola amigos PROGRAMADOR"


function nuevapalabra(palabra){

    const nuevap = palabra.split(" ")
  

    let reducirPalabra = nuevap.reduce((a, b) => {
      return a.length > b.length ? a : b
    })
 
    return console.log(reducirPalabra)



}

nuevapalabra(Palabra.toLowerCase())




/* Escribe una función que tome una matriz de números enteros y devuelva una matriz con los elementos ordenados de mayor a menor, eliminando
   cualquier duplicado. Puedes suponer que la matriz de entrada no está vacía.
*/


let Matriz3 = [5,7,5,8,9,1,10,5,9,5,1,1,1,9]

function matriz4(matriz3=undefined){

    if(matriz3 === undefined) return console.warn("no hay data")  

    let unicosn = []


    for (let i = 0; i < matriz3.length; i++) {
      unicosn.includes(matriz3[i]) ? "" : unicosn.push(matriz3[i])
    }

    let ordenados = unicosn.sort((a,b) => a - b )

    return console.log(ordenados)

}

matriz4(Matriz3)



/* el problema consiste en implementar una función que reciba dos parámetros: una matriz de n filas
   y m columnas, y un número entero k. La función deberá encontrar el k-ésimo número más grande presente
   en la matriz.
 */

   const NuevoArray2=[
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
  ]
  
const NumeroObjetivo2 = 5  
 

function valor(nuevoArray2,numeroObjetivo2){

    let nuevoarray = []

    nuevoArray2.forEach(e => nuevoarray.push(...e))

    nuevoarray.sort((a,b)=> b - a )

   

    return console.log(nuevoarray[numeroObjetivo2-1])

}

valor(NuevoArray2,NumeroObjetivo2)





/* Implementa una función repetidos(arr) que tome como argumento un arreglo de números y devuelva un nuevo arreglo
   que contenga todos los elementos del arreglo original que se repiten al menos una vez. El arreglo resultante 
   no debe contener elementos duplicados. 
*/



const nuevoArray3 = [1, 2, 3, 2, 4, 3, 5,1,4,4,4,1,1,4];

const nuevoArray4 = []  

// salida [1, 2, 3]



nuevoArray3.forEach(e => nuevoArray3.indexOf(e)!== nuevoArray3.lastIndexOf(e) ? nuevoArray4.push(e): '' )



console.log(nuevoArray4)
const unicos = []

for(let i = 0; i < nuevoArray4.length; i++){

  for(x = i+1 ; x <= nuevoArray4.length; x++){
    if(nuevoArray4[i] === nuevoArray4[x] && !unicos.includes(nuevoArray4[i])){
        unicos.push(nuevoArray4[i])
    }
  }

 
}

console.log(unicos)



/* Implementa una función llamada promedios que tome como argumento un arreglo de objetos, donde cada objeto representa
   un estudiante y tiene las siguientes propiedades: */


const Estudiantes = [
  { nombre: "Juan", calificaciones: [8, 7, 9, 10] },
  { nombre: "María", calificaciones: [10, 9, 8, 10] },
  { nombre: "Pedro", calificaciones: [7, 8, 6, 9] },
  { nombre: "Ana", calificaciones: [9, 9, 10, 8] },
  { nombre: "Anamaria", calificaciones: [1, 1, 5, 7] },
  { nombre: "juana", calificaciones: [7, 10, 15, 11] }
];




function promedio2(estudiantes = undefined){
    if(estudiantes === undefined) return console.warn('valor no encontrado')

    for(let estudiante in estudiantes){
          let promedio = estudiantes[estudiante]['calificaciones'].reduce((a,b)=> a + b)/estudiantes[estudiante]['calificaciones'].length
          estudiantes[estudiante]['promedio'] = promedio  
          delete estudiantes[estudiante]['calificaciones']

    }

    estudiantes.sort((a,b)=>  b['promedio'] -  a['promedio'] )
    
   

    return console.log(estudiantes)

}

promedio2(Estudiantes)




/* Escribe una función que tome como parámetros un objeto y una cadena de texto y devuelva true si la cadena de texto 
   es una clave (key) en el objeto y false en caso contrario. La función debe ignorar la capitalización de la cadena
   de texto y de las claves del objeto.
 */



const MiObjeto = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
const Clave = "NOMBRE";



function evalucacion(miObjeto,clave){
    const keys =  Object.keys(miObjeto)

    return console.log(keys.includes(clave))


}

evalucacion(MiObjeto,Clave.toLowerCase())




/* Implementa una función encontrarPares(arr) que tome como argumento un arreglo de números y encuentre todos los pares únicos
   de números que sumen a un valor específico target. La función debe devolver un arreglo con los pares encontrados en el siguiente
   formato: [[num1, num2], [num3, num4], ...]. 
*/




const NumerosObjetivo = [3, 4, 5, 6, 7,10,50]
const ValorNumero = 10

function paresSuma(numerosObjetivo,valorNumero){

    let nuevoarray5 = []

    for(let i = 0; i<numerosObjetivo.length; i++){

        for(let x = i + 1 ; x <numerosObjetivo.length; x++){
            numerosObjetivo[i] + numerosObjetivo[x] === valorNumero ? nuevoarray5.push( [numerosObjetivo[i],numerosObjetivo[x]]):''
           
        }


    }

    return  console.log(nuevoarray5)



}

paresSuma(NumerosObjetivo,ValorNumero)






/* Dado un arreglo de números enteros, encontrar el par de elementos contiguos que tenga la suma máxima.
   Si hay más de una solución, devolver cualquier par.

   Por ejemplo, para el arreglo [1, 2, -5, 4, 2, -1], la respuesta debería ser el par (4, 2). */


let numerosContiguos = [1, 2, -5, 4, 2, -1,1,2]
let resultado = []

for(let i = 0; i < numerosContiguos.length - 1; i++){

    resultado.push([numerosContiguos[i],numerosContiguos[i+1]])

}

const resultadoFinal = resultado.reduce((a,b)=> a[0] + a[1] > b[0] + b[1] ? a : b)


console.log(resultadoFinal)





/* Dado un arreglo de números enteros, encontrar todos los tríos de elementos únicos que tengan una suma igual a cero. 
   Devolver un arreglo de arreglos con los tríos encontrados.

   Por ejemplo, para el arreglo [-1, 0, 1, 2, -1, -4], la respuesta debería ser [[-1, 0, 1], [-1, -1, 2]]. */


const sumaCero = [-1, 0, 1, 2, -1, -4,5,4,-3]  
const resultadoSuma = []
let y
for(let i = 0; i < sumaCero.length; i++){

   for(let x = i + 1; x < sumaCero.length; x++){

      for(let k = x + 1; k < sumaCero.length; k++ ){
            if(sumaCero[i] + sumaCero[x] + sumaCero[k] === 0){
                  resultadoSuma.push([sumaCero[i],sumaCero[x],sumaCero[k]])
                 
            }
      } 
   }

}

console.log(resultadoSuma)


// SOLUCION IA

const sumaCero2 = [-1, 0, 1, 2, -1, -4,5,4,-3];
const resultadoSuma2 = [];



for (let i = 0; i < sumaCero2.length - 2; i++) {
  // i = 2  ;longitud array = 9-2= 7
  for (let x = i + 1; x < sumaCero2.length - 1; x++) {
    // x = 3 ; longitud array = 9-1= 8
    for (let y = x + 1; y < sumaCero2.length; y++) {
      // y = 7; longitud array = 9 
      if (sumaCero2[i] + sumaCero2[x] + sumaCero2[y] === 0) {
        resultadoSuma2.push([sumaCero2[i], sumaCero2[x], sumaCero2[y]]);
        break; // detener búsqueda para i y x
      }
    }
    if (resultadoSuma2.length > 0) break; // detener búsqueda para i
  }
}

console.log(resultadoSuma2);



/* Dado un array de números enteros, escribe una función que encuentre el par de elementos adyacentes
   que tiene la suma más grande y devuelva esa suma.

   Por ejemplo, para el array [1, 2, 3, 4, 5], la función debería devolver 9 (la suma de 4 y 5). 
*/


function sumaMaxima(array) {
  const sumatoriPares = []

    for(let i = 0; i < array.length-1; i++){
       sumatoriPares.push(array[i] + array[i+1])  
    }

   const reduce = sumatoriPares.reduce((a,b)=> a > b ? a : b)

    return reduce


}

console.log(sumaMaxima([1, 2, 3, 4, 5])); // Debería mostrar 9


/* Escribe una función que reciba un array de objetos que representan tarjetas de crédito. Cada objeto tiene las propiedades 
   "nombre", "saldo" y "tasaDeInteres". La función debe calcular y devolver el nombre del titular de la tarjeta con la deuda 
   total más alta. La deuda total se calcula como el saldo de la tarjeta más el costo del interés acumulado en un año, que se 
   calcula como la multiplicación del saldo por la tasa de interés. 
*/

const clientesBanco = [
  {
    nombre: "Tarjeta A",
    saldo: 1000,
    tasaDeInteres: 0.2
  },
  {
    nombre: "Tarjeta B",
    saldo: 500,
    tasaDeInteres: 0.1
  },
  {
    nombre: "Tarjeta C",
    saldo: 2000,
    tasaDeInteres: 0.15
  }
]


for(let i = 0; i< clientesBanco.length; i++){
  clientesBanco[i]['deudatotal'] = clientesBanco[i]['saldo'] + (clientesBanco[i]['saldo']*clientesBanco[i]['tasaDeInteres'])

}

const nuevoValor = clientesBanco.reduce((a,b)=> a['deudatotal'] > b['deudatotal']? a : b)

console.log(`el cliente con ${nuevoValor['nombre']} tiene una deuda mayor de: ${nuevoValor['deudatotal']}`)



