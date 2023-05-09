/* la fórmula (arrs.length - n + 1) se utiliza cuando se quiere buscar combinaciones de n elementos en el array, y
   se utiliza para asegurar que los bucles anidados no iteren más allá de los límites del array. Pero cuando se busca
   de a pares, no es necesario utilizar esta fórmula, ya que se puede simplemente utilizar dos bucles anidados que 
   iterten sobre todos los pares posibles en el array. 
   una de las situaciones en las que se necesita utilizar la fórmula. Si se agregan o quitan elementos en cada iteración
   entonces la longitud del array puede variar y es necesario utilizar la fórmula para garantizar que se tomen en cuenta 
   todas las combinaciones posibles sin exceder los límites del array.
*/

    



/* Escribe una función que tome un array de números y devuelva todas las posibles combinaciones de tres números que sumen a cero.
   No deben haber combinaciones repetidas en la respuesta.

   Por ejemplo, para el array [-1, 0, 1, 2, -1, -4], la función debería devolver lo siguiente:
   
   [  [-1, 0, 1],
      [-1, -1, 2]
               ]

   Ten en cuenta que en este ejemplo, la combinación [-1, 2, -1] no debe incluirse en la respuesta porque ya está representada por 
   [-1, -1, 2].

*/



const combinaciones = [-1, 0, 1, 2, -1, -4]

const NuevoAr =[]
const NV = 3


for(let i = 0; i < combinaciones.length -NV+1; i++){

  for(let j = i+1; j < combinaciones.length -NV+2; j++){

    for(k = j+1; k < combinaciones.length -NV+3; k++){

        if([combinaciones[i]+combinaciones[j]+combinaciones[k]] == 0)
        NuevoAr.push([combinaciones[i],combinaciones[j],combinaciones[k]])

    }

  }

}



console.log(NuevoAr)





/* ENCONTRANDO TODAS LAS COMBINACIONES DE TRIOS POSIBLES, SE DEBERAN DE AGREGAR TANTOS BUCLES COMO
   COMBINACIONES SE REQUIERA
*/ 

const arrs = [1, 2, 3, 4];
const n = 3; // Número de elementos por combinación

const combinations = [];

for (let i = 0; i < arrs.length; i++) {  // POR CADA ITERACION DEL BUCLE PADRE PADRE EL BUCLE HIJO SE EEJCUTARA TODAS LAS VECES POSIBLES 
  for (let j = i+1; j < arrs.length; j++) {  // ESTE SE EJECUTARA TODAS LAS VECES POSIBLES POR CADA ITERACION DEL BUCLE SUPERIOR PERO POR CADA ITERACION DE ESTE EL BUCLE INFERIOR SE EJECUTARA TODAS LAS VECES POSIBLES
      for (let y = j+1; y < arrs.length; y++){  // ESTE SE EJECUTARA TODAS LAS VECES POSIBLES POR CADA ITERACION DE LOS BUCLES QUE TIENE COMO PADRE, SIEMPRE Y CUANDO NO SOBRE PASE LA LONGITUD DEL ARRAY PRINCIPAL
        combinations.push([arrs[i],arrs[j],arrs[y]])
       
      }
    
  }
  
}

console.log(combinations)











/* Escribe una función que tome dos arrays de números y devuelva un nuevo array que contenga los elementos comunes entre 
   ambos arrays, sin elementos duplicados. Por ejemplo, si los arrays son [1, 2, 3, 4] y [3, 4, 5, 6], la función debería
   devolver el array [3, 4].
 */


function encontrarElementosComunes(arr1, arr2) {
  let elementosComunes = [];

 
  for (let i = 0; i < arr1.length; i++) {
   
    for (let j = 0; j < arr2.length; j++) {
          if(arr1[i] === arr2[j] && !elementosComunes.includes(arr1[i])){
                elementosComunes.push(arr1[i])
          }
    }
  }

  return elementosComunes;
}

// Ejemplo de uso:
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 1, 5];
const elementosComunes = encontrarElementosComunes(arr1, arr2);
console.log(elementosComunes); // debería imprimir [3, 4]











/* Ejercicio: Dado un array de números, encuentra todos los pares de elementos que sumen un valor dado.

   Por ejemplo, para el array [1, 2, 3, 4, 5] y el valor 7, la función debería devolver los pares 
   [2, 5] y [3, 4].
 */

   const numer = 7

   const arrayEva = [1, 2, 3, 4, 5,5,4,3]
  console.log(arrayEva.some(e=> e > 9))
   const nuevoA = []

 // cada sub array va a adoptar el valor de pair
 // cada elemento del sub array va a adoptar el valor de elem
   for(let i = 0; i< arrayEva.length; i++){
      for(let j = i+1; j< arrayEva.length; j++){

        const newPair = [arrayEva[i], arrayEva[j]]
        if (arrayEva[i] + arrayEva[j] == numer && !nuevoA.some(pair => pair.every(elem => newPair.includes(elem)))) {
          nuevoA.push(newPair)
      }
                                                              

      }

   }


   console.log(nuevoA)

/* NOTA : algunos de los elementos(sub arrays) del array nuevoA y todos los elementos de los subarrays del array nuevoA imcluyen
   a los mismos elementos de otros de los subarrays al decirle ! es como decir que ni un elemento de cualquier subarray del array
   nuevoA pueda tener valores iguales
*/




/* en este ejercicio se te pide que encuentres la subsecuencia creciente más larga dentro de un arreglo de números. Una subsecuencia
   creciente es una secuencia de números en la que cada número es mayor que el anterior, aunque no necesariamente consecutivo.

   Por ejemplo, si tenemos el arreglo [3, 10, 2, 1, 20], podemos encontrar dos subsecuencias crecientes: [3, 10, 20] y [2, 20]. La subsecuencia
   creciente más larga es [3, 10, 20], que tiene un tamaño de 3 
*/



function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return Math.max(...dp);
}

const arreglo = [3, 10, 2, 1, 20];
console.log(longestIncreasingSubsequence(arreglo)); // Output: 3

Math.max()






/* Escribe una función que tome un array de números y devuelva un array con todas las subsecuencias que suman a un número objetivo.
   Por ejemplo, para el array [1, 2, 3, 4, 5] y el número objetivo 9, la función debería devolver el array [[2, 3, 4], [4, 5]].

  Para resolver este problema, necesitarás recorrer el array y mantener un registro de la suma acumulada de los elementos vistos hasta
  ese momento. Si la suma acumulada en algún punto es igual al número objetivo, eso significa que los elementos desde el inicio del array
  hasta ese punto suman el número objetivo. Además, es posible que haya múltiples subsecuencias que sumen al número objetivo, por lo que
  deberás mantener un registro de todas estas subsecuencias.
*/

const ar = [1, 2, 3, 4, 5]

const no= 9
let subsecuencias = []

for(let i = 0; i< ar.length; i++){
  let suma = 0
  let sub = [] // POR CADA ITERACION SE CREARA UN NUEVO ARRAY QUE ALMACENARA A CADA VALOR ITERADO

    for(let x = i; x < ar.length; x++){
      suma+= ar[x]      // EN EL BUCLE  INTERNO SUMAMOS LA VARIABLE INICIALIZADA EN CERO CON CADA ELEMWNTO ITERADO 
      sub.push(ar[x]) // Y ASU VEZ CADA ELEMENTO LO AGREGAMOS AL ARRAY NUEVO SUB

      if(suma==no){  // SI LA SUMA DE LOS ELEMENTOS ES IGUAL AL NUMERO OBJETIVO EL ARRAY QUE ALMACENA A CADA ELEMENTO ITERADO SE INSERTARA AL ARRAY PRINCIPAL
          subsecuencias.push(sub)
          break    // La sentencia break se utiliza para salir del bucle interno si se encuentra una subsecuencia que cumple con los criterios, ya que no es necesario seguir iterando.
      }
    }  

}

console.log(subsecuencias)





/* Escribe una función que tome un array de números y devuelva un array con todas las subsecuencias que tienen una longitud igual o mayor
   a un número dado y cuya suma sea igual o mayor a otro número dado.
   Por ejemplo, para el array [1, 2, 3, 4, 5] y los números 2 y 7, la función debería devolver el array [[2, 3, 4], [3, 4, 5]].
*/

function subsecuenciasMayoresONumero(ar, len, sum) {
  const subsecuencias = [];

  for (let i = 0; i < ar.length; i++) {
    let sub = []; // array secundario  que alojara a los elementos de cada iteracion
    let suma = 0; //  inicializamos suma en 0 donde por cada iteracion ira actualizando su valor  

    for (let j = i; j < ar.length; j++) {
      sub.push(ar[j]); // agregamos cada elemento de la iteracion en el array secundario
      suma += ar[j]; // sumamos cada elemento del array con el siguiente

      if (sub.length >= len && suma >= sum) { // si la longitud del array secundario es mayor o igual a len y la suma es mayor o igual a sum
        subsecuencias.push(sub);   // el array secundario se agregara al principal
        break   // se rompe el bucle cuando encuentra una coincidencia para evitar estar iterando 
      }
    }
  }

  return subsecuencias;
}

const Ar1 = [1, 2, 3, 4, 5];
const Leng = 2;
const Sum = 7;

console.log(subsecuenciasMayoresONumero(Ar1, Leng, Sum)); // [[2, 3, 4], [3, 4, 5]]






/* Escribe una función que tome un array de números y devuelva un array con todas las subsecuencias que tienen una longitud igual o mayor a un número
   dado y cuyo valor promedio sea mayor o igual a otro número dado. Por ejemplo, para el array [1, 2, 3, 4, 5, 6] y los números 3 y 3, la función 
   debería devolver el array [[3, 4, 5, 6]]. Aquí te dejo una plantilla de código para que puedas empezar a trabajar en ella: 
   
*/




  // Tu código aquí


const Ar2 = [1, 2, 3, 4, 5, 6];
const Len2 = 3;
const Prom = 3;
const PR = []

for(let i = 0; i < Ar2.length; i++){
  let subA = []
  let sum = 0
    for(let j = i; j < Ar2.length; j++){
      sum+= Ar2[j]
      subA.push(Ar2[j])

      if(subA.length >= Len2 &&  sum/subA.length>=Prom){
          PR.push(subA)
          break
      }


    }


}

console.log(PR)









/* Escribe una función que tome un array de números y devuelva la cantidad de subarrays que suman a cero.
   Por ejemplo, para el array [1, 2, -2, 3, -3], la función debería devolver 3, ya que hay tres subarrays
   que suman a cero: [1, 2, -3], [2, -2] y [-3, 3]. 

   Para resolver este problema, necesitarás recorrer el array y mantener un registro de la suma acumulada de
   los elementos vistos hasta ese momento. Si la suma acumulada en algún punto es cero, eso significa que los
   elementos desde el inicio del array hasta ese punto suman cero. Además, es posible que haya múltiples puntos
   en los que la suma acumulada sea cero, por lo que deberás mantener un registro de todos estos puntos.
 */



   function countZeroSumSubarrays(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === 0) {
          count++;
        }
      }
    }
    return count;
  }
  

  const arr = [1, 2, -2, 3, -3];
  const count = countZeroSumSubarrays(arr);
  console.log(count); // debería imprimir 3







/* 
  Escribe una función que tome un array de números y un número objetivo, y devuelva un array con todas las subsecuencias que multiplican a
  dicho número objetivo. Por ejemplo, para el array [1, 2, 3, 4, 5] y el número objetivo 20, la función debería devolver el array [[4, 5]].
  Ten en cuenta que la subsecuencia puede tener cualquier longitud y los números pueden estar en cualquier orden.
*/


const multiplicacionOb = [1, 2, 3, 4, 5]
const resultado = []
const numeroO = 20

for (let i = 0; i < multiplicacionOb.length; i++) { //(podria decirse que este bucle sirve para setear cada subarray y variables para que comienze una nueva cuenta)
                                                    // este bucle se encargara de iterar todos los elementos del array por cada iteracion de este el bucle hijo se 
                                                    // ejecutara todas las veces posibles
   let sub = []   // por cada iteracion del bucle principal se seteara el contenido del array secundario 
   let mult = 1  // tambien se setara el valor de la variable mult que contiene  al producto de los elementos iterados en el bucle inferior
  
    for(let j = i; j < multiplicacionOb.length; j++){ // este bucle se encargara de hacer el proceso operativo
     
      sub.push(multiplicacionOb[j])
        mult*=multiplicacionOb[j]

        if(mult == numeroO){  
          resultado.push(sub)
          break
        }

    }
  




}

console.log(resultado)



/*  El bucle principal se encarga de recorrer todo el array, mientras que el bucle secundario se encarga de iterar a través de cada posible
    subsecuencia a partir de la posición actual en el bucle principal. El array sub se inicializa vacío en cada iteración del bucle principal,
    y se van agregando elementos a medida que el bucle secundario itera a través de los elementos del array. La variable mult se inicializa en
    1 en cada iteración del bucle principal, y se van multiplicando los elementos de la subsecuencia actual a medida que el bucle secundario 
    itera. Si en algún momento la multiplicación es igual al número objetivo, se agrega la subsecuencia actual al array  
    
*/



/* Escribe una función que tome una matriz de enteros y un número objetivo, y devuelva un array con todas las combinaciones posibles de números
   que suman a dicho objetivo. Cada número solo puede ser utilizado una vez en cada combinación. Por ejemplo, para la matriz [2, 5, 3, 1] y el 
   número objetivo 8, la función debería devolver el array [[2, 5, 1], [3, 5], [2, 3, 1]].
   
*/

const combinaciones2 = [2,5,3,1]
const resultadoNuevo = []
const numeroOBjetivo = 8


for (let i = 0; i < combinaciones2.length; i++) { 
      let subarray = []
      let sumaObjetivo = 0    

      for (let j = i; j < combinaciones2.length; j++) {
           subarray.push(combinaciones2[j])
           sumaObjetivo+= combinaciones2[j]
           
           if(sumaObjetivo == numeroOBjetivo ){
                resultadoNuevo.push(subarray)
                break
           }
        
      }
  
}



console.log(resultadoNuevo)


/* Tienes un array de números entre positivos y negativos, tu reto es retornar un array ordenado de menor a mayor 
   y dejando los valores sin que se repitan números.

  Para solucionarlo vas a encontrar una función llamada filterUnique que tiene un parámetro de entrada: array: Un
  array de números.
  
*/

/* 
Output: [1, 2, 3] */

let duplicados = [3, 3, 2, 2, 1, 1]

// forma 1
function filterUnique(array) {
  let nuevoA = []
  array.forEach(element => {
      nuevoA.includes(element) ? '' : nuevoA.push(element)
  });
  
  return   nuevoA.reverse()
}

console.log(filterUnique(duplicados))



// forma 2

/* let duplicados = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]

function filterUnique(array) {

  const obj = {}
  
  array.forEach(element => {
      obj[element] ? obj[element]++ : obj[element] = 1 
  });
  
  const sindupl = Object.keys(obj).map(e=> parseInt(e))
  return sindupl.sort((a,b)=> a - b ) 

}

console.log(filterUnique(duplicados)) */


/* Tienes un array de números entre positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número */

let countN = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
function counterNumbers(numbers) {
  
  let obj = {}

  for(let i = 0; i< numbers.length;i++){
      obj[numbers[i]] ? obj[numbers[i]]++ : obj[numbers[i]]= 1
  }

return console.log(obj)
}

counterNumbers(countN)


/* el método concat() de JavaScript para agregar un elemento a un array sin modificar el array original. El método concat() crea un nuevo array que incluye
   los elementos del array original y el nuevo elemento agregado. Aquí hay un ejemplo: 
   
*/




/* Un número primo es un número entero mayor que 1 que solo es divisible exactamente por 1 y por sí mismo. Es decir, no tiene más divisores que 1 y él mismo

*/



/* Para encontrar los factores primos de un número, puedes seguir los siguientes pasos:

Empieza dividiendo el número por 2 y sigue dividiendo por 2 hasta que ya no sea divisible. Si el número no es divisible 
por 2, pasa al siguiente número primo, que es 3.
Divide el número por 3 y sigue dividiendo por 3 hasta que ya no sea divisible. Si el número no es divisible por 3, pasa 
al siguiente número primo, que es 5.
Sigue dividiendo el número por los números primos sucesivos (7, 11, 13, etc.) hasta que el número llegue a 1.
Cada vez que encuentres un factor primo, guárdalo en una lista y sigue dividiendo el número por ese factor primo hasta que
ya no sea divisible. Luego, continúa con el siguiente número primo.
 
*/

// ENCONTRAR EL FACTOR PRIMO


function factorizarNumero(numero) {
  let factores = []; // creamos un array donde guardaremos los factores primos
  let divisor = 2;  // inicializamos el divisor en 2  ya que todo primo empieza a partir del numero 2 y no puede ser 1 ni negativos  

  while (numero >=2) {  // con este bucle  y condicional me aseguro de iterar solo hasta que el numero sea menor o igual a 2 ya que como dijimos no puedes ser menor 
    if (numero % divisor == 0) {  // si el numero modulo del divisor es igual a cero quiere decir que ese numero es un factor primo de dicho numero
      factores.push(divisor); // entonces se agrega ese numero al array
      numero /= divisor; // luego dividimos el valor del numero entre el divisor actual y asi decrecemos a dicho numero
    } else {
      divisor++; // si no se cumple la condicion el divisor aumenta su valor para seguir evaluandose con el numero, es decir el numero se evaluara con los numeros anteriores a el menos con el uno 
    }
  }

  return factores;
}

console.log(factorizarNumero(2)); 




// encontrar el mayor numero palindromico producto de 3 numeros de 2 digitos


let n1 = 99

let arrayN = [] //15-12-10

// 10*11*12|10*11*13|10*11*14|10*11*15...   10*12*13|10*12*14|10*12*15

for(let i = 10; i<=n1; i++){
  for (let j = i+1; j <=n1; j++) {
    for (let k = j+1; k <=n1; k++) { // recalcar que primero se ejecutara el bucle mas interno y hasta que deje de cumplir la condicion subira un nivel hacia el bucle externo 
      /* console.log(i,j,k) */
      let f = i*j*k
      
      let r = parseInt(f.toString().split('').reverse().join().replace(/,/g,''))
      r === f ? arrayN.push(r): ''
    }
    
  }
}
const nuevoArr = arrayN.reduce((a,b)=>{
  return a > b ? a : b
})

//console.log(arrayN)


/* Un número palindrómico se lee igual en ambos sentidos. El palíndromo más grande hecho del producto de dos números de 2 dígitos es 9009 = 91 × 99.

   Encuentra el palíndromo más grande hecho del producto de nnúmeros de dos dígitos. 
   
*/



// solucion 1
/* 
function largestPalindromeProduct(n) {
  let max = 0;
  let start = Math.pow(10, n - 1);
  let end = Math.pow(10, n) - 1;
  
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      let product = i * j;
      if (isPalindrome(product) && product > max) {
        max = product;
      }
    }
  }
  
  return max;
}

function isPalindrome(num) {
  let str = num.toString();
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


console.log(largestPalindromeProduct(3))
 */

// solucion 2


function largestPalindromeProduct(n) {
  const inicio = Math.pow(10,n-1)
  const final = Math.pow(10,n)-1
  const arrayPal = []

  for (let i = inicio ; i <=final; i++) {
    for (let j = inicio+1; j <=final; j++) {
      let mult = i*j
      let reverse = parseInt(mult.toString().split('').reverse().join().replace(/,/g,''))
      mult === reverse ? arrayPal.push(mult) : '' 
      
    }
    
  }
    return console.log(Math.max(...arrayPal))
    
  }
  
  largestPalindromeProduct(3);





// devolver todos los primos

const primosA = [4,5,7,8,9,10,15,61]
const noPrimos = []

for (let i = 0; i < primosA.length; i++) {
  for (let j = 2; j < primosA[i]; j++) {
        if(primosA[i] % j === 0){
          console.log(`${primosA[i]} no es primo`)
          noPrimos.push(primosA[i])
          break
        }
    
  }
  
}
const primosFilt = primosA.filter(e =>{
  return  !noPrimos.includes(e) // retorname todos los numeros del array primosA que no esten incluidos en el array noPrimos
})

console.log(primosFilt)
console.log(noPrimos)




/* 2520 es el número más pequeño que se puede dividir por cada uno de los números del 1 al 10 sin resto.

  ¿Cuál es el número positivo más pequeño que es divisible por todos los números del 1 al n? 

*/







/* Crea una función que tome como parámetros dos listas de números y devuelva una nueva lista que contenga la suma 
   de los elementos de las listas en cada posición.

   Por ejemplo, si se tienen las listas [1, 2, 3] y [4, 5, 6], la función debería devolver la lista [5, 7, 9].
   
*/

const elementos1 = [1,2,3]
const elementos2 = [4,5,6]

const sumaArray = (a, b) => {
  const value = new Array()

  for(let numero in a){
    value.push(a[numero] + b[numero])
  }
return console.log(value)

}
sumaArray(elementos1, elementos2)



/* iterar con objetos  */

const objetoPruebas = {
  name: 'carlos',
  age : '20',
  country : 'peru',
  friends : ['ana','fernando','lucia'],
  pet : true
}



// los for of solo sirven para arrays


// LA MANERA DE ITERAR UN OBJETO PURO ES HACERLO CON FOR IN DONDE ESTE ME DEVOLVERA  LA PROPIEDAD DE DICHO OBJETO

for(let propiedades in objetoPruebas){
  propiedades =='pet' ? objetoPruebas[propiedades] = false : ''
} 

// asignar nuevos valores
objetoPruebas['nuevoValor'] = 'dato Nuevo' 
// editar los valores
objetoPruebas['nuevoValor'] = 'dato cambiado'
// eliminar los valores
delete objetoPruebas['nuevoValor']

console.log(objetoPruebas)





// iterar arrays

const objetoPruebas2 =[
  {name:'carlos',age:20},
  {name:'maria',age:30},
  {name:'fernando',age:24}

]

// CON LOS ARRAY SE PUEDEN USAR LOS BUCLE FOR OF Y FOR IN

// ESTE DEVUELVE AL ELEMENTO COMO TAL
for(let objeto of objetoPruebas2){
  console.log(objeto)
}

// ESTE DEVUELVE LA POSICION DE CADA ELEMENTO EN LA ITERACION
for(let objeto in objetoPruebas2){
    console.log(objeto)
}



