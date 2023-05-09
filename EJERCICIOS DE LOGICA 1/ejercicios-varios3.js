// METODO JOIN: SOLO FUNCIONA PARA CONCATENAR VALORES DE UN ARRAY ESTOS PUEDEN SER ARRAYS DE NUMEROS O LETRAS

let letras=[3,1,4]
let concat=letras.join(' ')
console.log(concat)




/* Escribe una función que tome dos números como argumentos y devuelva la suma de todos los números entre ellos,
   incluyendo esos dos números. Por ejemplo, si la función recibe 1 y 4, debería devolver 10 (1+2+3+4=10).
 */


   function sumBetween(a, b) {
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i;
    }
    return sum;
  }
  
  // Ejemplo de uso
  console.log(sumBetween(1, 4)); // Devuelve 10
  



/* Escribe una función que tome una matriz de números enteros y devuelva la suma de los dos números más grandes de la
   matriz. Por ejemplo, si la matriz es [10, 5, 2, 9, 11], la función debería devolver 21 (11 + 10). */

//  PRIMERA FORMA DE HACERLO

let numeros=[1,2,3,4,1,4,7]

function values(e){
   let NuevoValor=e.sort((a,b)=>{
        return b-a
    })
    console.log(NuevoValor)
    return NuevoValor[0]+NuevoValor[1]
}

 console.log(values(numeros))


/* SEGUNDA FORMA DE HACERLO: RECALCAR QUE ESTA FORMA SIRVE CUANDO TENEMOS NUMEROS CONSECUTIVOS, YA QUE 
   ASI PODEMOS SUMAR EL MAXIMO + EL SEGUNDO MAS ALTO */

   function values2(e){
        let max=Math.max(...e)
        

        return max+(max-1)
   } 


   console.log(values2(numeros))


/* 
  Escribe una función que tome una cadena de texto y devuelva la letra más común en la cadena. Si hay dos o más 
  letras que aparecen la misma cantidad de veces, la función debería devolver cualquiera de ellas. Por ejemplo, si
  la cadena es "hola mundo", la función debería devolver "o" ya que aparece dos veces.
*/



let letra='hola como estan bienvenidos a la comunidad de la programacion'



function values3(e){
  let objeto={}
  let separaciones = e.split('')

  for(let separacion of separaciones){
      if(objeto[separacion]){ objeto[separacion]++}
      else{ objeto[separacion]=1}    
  }

/*  OBJECT.ENTRIES ME DEVUELVE UN ARRAY DE ARRAY DONDE CADA SUB ARRAY TENDRA LA CLAVE, PROPIEDAD-VALOR  */
  let SubArrays=Object.entries(objeto)
      let reduce= SubArrays.reduce((a,b)=>{
          return a[1] > b[1] ? a : b
      })

return `el valor que mas se repite es : ${reduce[0]} y se repite ${reduce[1]} veces`

}

    console.log(values3(letra.replace(/ /g,'')))









/* 
OK DAME UN EJERCICIO PARA MEJORAR MI LOGICA DE PROGRAMACION 
Y ANALISIS EN JS */


/* Escribe una función que tome un array de números como argumento y devuelva el segundo número más grande en el array.

  Por ejemplo, si el array es [4, 6, 1, 8, 5], la función debería devolver 6. Si el array es [1, 2, 3, 4, 5], la función debería
  devolver 4. */

/* let arraynumero=[4, 6, 1, 8, 5]


function segundoMayor(e){
 let segundomayor= e.sort((a,b)=>{
     return  b-a
  })

  return segundomayor[1]
}
 console.log(segundoMayor(arraynumero)) */


// segunda forma de resolverlo

function segundoMayor(arr) {
  // Filtramos los valores repetidos
  const unicos = arr.filter((value, index, self) => self.indexOf(value) === index);
  console.log(unicos)
  // Ordenamos los valores de mayor a menor y tomamos el segundo elemento
  return unicos.sort((a, b) => b - a)[1];
}

console.log(segundoMayor([4, 6,1,5,6])); // Output: 6


  