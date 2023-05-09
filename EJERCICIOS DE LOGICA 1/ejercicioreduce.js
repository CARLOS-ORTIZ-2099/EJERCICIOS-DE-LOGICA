/* Obtener la suma de todos los números en un array de objetos
Supongamos que tenemos un array de objetos con una propiedad numérica llamada "valor". Queremos obtener la suma de todos los valores en el array utilizando el método reduce. */



let numeros = [{valor: 10}, {valor: 20}, {valor: 30}, {valor: 40}];

let suma = numeros.reduce((acumulador, objeto) => {
  return acumulador + objeto.valor;
}, 0);

console.log(suma); // 100




/* Calcular la media de un array de números
Supongamos que tenemos un array de números. Queremos calcular la media de todos los números en el array utilizando el método reduce. */

let numeros2 = [10, 20, 30, 40];

let suma2 = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

let media = suma / numeros.length;

console.log(media); // 25

/* Encontrar el número más frecuente en un array de números Supongamos que tenemos un array de números.
   Queremos encontrar el número más frecuente en el array utilizando el método reduce. */


   let numeros3 = [1, 2, 2, 4, 5, 4, 2, 3, 4, 1, 2, 1]

let repetidos={}

 let res=   numeros3.reduce((a,b)=>{
        if(repetidos[b]){
            repetidos[b]++
        }else{
            repetidos[b]=1
        }


        if(repetidos[a]>repetidos[b]){
                return a
        }else{
                return b
        }
    },0)

console.log(repetidos)
console.log(`el valor que mas se repite es ${res}`)








