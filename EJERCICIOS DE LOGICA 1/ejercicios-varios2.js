/*  Dado un array de números, escribe una función que devuelva la suma de todos los números pares. */

/*  Requerimientos:

    La función debe tomar un array como parámetro.
    La función debe devolver un número.
    Debe ser capaz de manejar arrays vacíos y arrays que no contienen números pares. */


    let numeros=[1,2,3,4,5,6,7,8]

    function values(valores){
    let suma=0

        if(valores.length==0)console.log(`no hay nada`)
            

        else if(valores.length>0){    

          for(let valor of valores){
                if(valor%2==0) suma+=valor
                else console.log(`${valor} no es par`)
                
          } 

        }    

    return suma
    }

   console.log(values(numeros))


/*  Escribe una función que tome un string como parámetro y devuelva el número de veces que cada palabra aparece en el string. */

/*  Requerimientos:

    La función debe tomar un string como parámetro.
    La función debe devolver un objeto que contenga cada palabra como clave y el número de veces que aparece como valor.
    La función debe ignorar signos de puntuación y espacios en blanco */



let palabra='hola mundo como estan'

let objecto={}

function values2(elemento){
    let separacion= elemento.split('')

    let resultado= separacion.reduce((a,b)=>{
        if(objecto[b]) return  objecto[b]++
        else return  objecto[b]=1
        
    },0)

    return resultado
}


    console.log(values2(palabra.replace(/ /g, "")))

    console.log(objecto)


/*  Dado un array de strings, escribe una función que devuelva el número de palabras que tienen más de tres caracteres. */

/*  Requerimientos:

    La función debe tomar un array como parámetro.
    La función debe devolver un número.
    La función debe ser capaz de manejar arrays vacíos y arrays que no contienen strings de más de tres caracteres. */



let strings=['uno','dos','tres','cuatro','cinco','seis','siete','sol','mia']

function values3(strings){
    let inicial=0
    for(string of strings){
        if(string.length>3)  inicial++
        else{
            console.log(`${string} no tiene mas de 3 caracteres`)
        }
    }
    return inicial
}


   console.log(values3(strings))





/*  Escribe una función que tome dos strings como parámetros y devuelva true si las dos strings tienen los mismos caracteres, pero en orden diferente. */

/*  Requerimientos:

    La función debe tomar dos strings como parámetros.
    La función debe devolver un booleano.
    La función debe ignorar espacios en blanco y signos de puntuación. */ 

let letra1='alvaro felix'
let letra2='alonso feliz'
console.log(letra2.includes(letra1))

function values4(l1,l2){
    let L1= l1.split('')
    let L2= l2.split('')

    let map= L1.map(e=>{
        console.log(e)
      return  L2.includes(e)
    })
    return map
}

   console.log(values4(letra1.replace(/ /g,""), letra2.replace(/ /g,"")))
   



/*  Dado un array de números, escribe una función que devuelva un nuevo array que contenga todos los números únicos del array original. */   



/*  Requerimientos:

    La función debe tomar un array como parámetro.
    La función debe devolver un nuevo array.
    La función debe ser capaz de manejar arrays vacíos y arrays que no contienen números únicos. */
    
    let nuevos=[]

    let numeros2 = [1,2,3,4,5,6,7,8,1,2,3,4,5,10];
    /* EVALUO CADA UNO DE LSO ELEMENTOS DEL ARRAY */
    for(let i=0; i< numeros2.length;i++){

        /* LUEGO UTILIZO UNA CONDICIONAL QUE ME DIGA QUE SI EL INDICE INICIAL Y FINAL DE ESE NUMERO SON IGUALES ES DECIR SI EL NUMERO NO SE REPITE
           A LO LARGO DEL ARRAY QUE IUNSERTE ESE NUMERO NO REPETIDO EN UN NUEVO ARRAY */
            if(numeros2.indexOf(numeros2[i])==i && numeros2.lastIndexOf(numeros2[i])==i){
                nuevos.push(numeros2[i])
            }
    }

        console.log(nuevos)

 

    function values5(elementos) {
        let nuevo=[]
        for(i=0;i<elementos.length;i++){
            if(elementos.indexOf(elementos[i])==i && elementos.lastIndexOf(elementos[i])==i)    
             nuevo.push(elementos[i])   
        }
        return nuevo
    }

    const result= values5(numeros2)
    console.log(result)



 /* Ejercicio: Dado un array de números y un número objetivo, escribe una función que encuentre un par de números en el array
    cuya suma sea igual al número objetivo. La función debería devolver un array con esos dos números en el orden en que aparecen
    en el array original. */   

 /* Ejemplo:


    const array = [2, 5, 7, 9, 11];

    console.log(result); // [5, 11] */



let N=60

    function values6(N){
        let fx=[]
        let array=[10,20,30,40,30,40] 
        let indice=0
        
        while(indice<array.length){    

            for(i=0;i<array.length;i++){
                if(array[indice]!==array[i] && array[indice]+array[i]==N){
                    fx.push(array[indice],array[i])
                    
                }
                if(fx.length==2) break
            }
               
            indice++

            if(fx.length==2) break
             
        }
        return fx
    }    

       console.log(values6(N))
        


       


    // segunda forma de resolverlo 


/* let N=50

        function values6(N){
            let fx=[]
            let array=[10,20,30,40,30,40] 
            let indice=0
        
            while(indice<array.length && fx.length<2){    
                for(i=0;i<array.length;i++){
                if(array[indice]!==array[i] && array[indice]+array[i]==N){
                    fx.push(array[indice],array[i])
                    break;
                }   
                }
                indice++   
            }
            return fx
        }    

    console.log(values6(N))
 */
        




/* ORDENAR LOS NUMERO DEL ARRAY */


let  ordenarLista=[5, 2, 7, 3, 8, 1, 4, 9, 6]



function valuesx(e){
    let ordenado= e.sort((a,b)=>{
        return a-b
    })   
    return ordenado 
}

    console.log(valuesx(ordenarLista))

  /*   primer ordenamiento  ordenarLista=[5, 2, 7, 3, 8, 1, 4, 9, 6]=[2,5,3,7,1,4,8,6,9]
         segundo ordenamiento=[2,3,5,1,4,7,6,8,9]
         tercer ordenamiento=[2,3,1,4,5,6,7,8,9]
         cuarto ordenamiento=[2,1,3,4,5,6,7,8,9]
         quinto ordenamiento=[1,2,3,4,5,6,7,8,9]
  
  
  */



//   SEGUNDA MANERA DE HALLAR LA SOLUCION UTILIZANDO EL METODO BUBBLE SORT

    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    return arr;
    }


     




/* Escribe una función que tome una cadena de palabras separadas por espacios y devuelva la misma cadena,
   pero con las palabras en orden alfabético. Por ejemplo, si la entrada es "perro gato mesa silla", la 
   salida debe ser "gato mesa perro silla".

  Puedes asumir que la cadena de entrada solo contendrá letras minúsculas y espacios en blanco. También
  puedes usar el método sort() de JavaScript para ordenar las palabras. */


let cadenadepalabras="perro gato mesa silla"

function values7(e){
    let nuevo= e.split(' ')
    let nuevomas= nuevo.sort()

    return nuevomas.toString().replace(/,/g, ' ')
}

   console.log(values7(cadenadepalabras))



// OTRA FORMA DE RESOLVERLO 

/* function ordenarPalabras(cadena) {
   return cadena.split(' ').sort().join(' ');
}

  console.log(ordenarPalabras('perro gato mesa silla')); // "gato mesa perro silla"
*/




//  ESTRUCTURA DE UNA EXPRESION REGULAR DE BUSQUEDA 

/* 
/    valor a buscar/g
    /patrón/modificadores;


    lo que va dentro de las barras invertidas son los patrones de búsqueda, que especifican 
    lo que se quiere buscar y reemplazar. La g es una bandera que significa "global", es decir,
    que se buscan y reemplazan todas las ocurrencias en lugar de solo la primera
*/



