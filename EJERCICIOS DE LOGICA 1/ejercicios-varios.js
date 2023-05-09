/* 
Dado un array de números, crear una nueva matriz con todos los valores duplicados.
*/


// SOLUCION

let numbers = [1,2,3,4,5,6]
let duplicate = numbers.map(e => {
    return e * 2
})

console.log(duplicate)



/* 
Dado un array de objetos, crear una nueva matriz con solo los objetos que tienen una propiedad específica.
*/

let teams=[
  {
    name:'manchester city',
    coutry: 'ing',
    creation:1983
  },
  {
    name:'real madrid',
    coutry: 'esp',
   
  } ,
  {
    name:'nantes',
    coutry: 'fra',
   
  } ,
  {
    name:'inter',
    coutry: 'ita',
    creation:1989
  }   

]

//  SOLUCION 1
let count = teams.filter(e => {
    return  e['creation']
})

console.log(count)

// SOLUCION 2

let countrys=[]

for(n of teams){
    if(n.name) countrys.push(n.name)
    
    else console.log(`el equipo no existe`)
    
}
console.log(countrys)



/* Dado un array de números, crear una nueva matriz con todos los números pares. */

// SOLUCION

let numbers2=[1,2,3,4,5,67,10]

let pares=[]
numbers2.forEach(e=>{
    if(e%2==0) pares.push(e)
    else console.log(`${e} no es par`)
})

console.log(pares)


/* Dado un array de objetos que contienen nombres y edades, crear una nueva matriz con solo los nombres de las personas que tienen más de 18 años. */


let persons=[
{  
   name:'alberto',
   age:20 
},
{  
    name:'maria',
    age:40 
 },
 {  
    name:'luciano',
    age:14 
 },
 {  
    name:'esteban',
    age:11 
 },
 {  
    name:'gino',
    age:3 
 }
]

let person=[]
for( let name of persons){
    if(name.age>18) person.push(name.name)
    else{console.log(`${name.name} no es mayor de edad`)}
}
console.log(person)



/* Dado un array de números, crear una nueva matriz con la suma acumulada de cada elemento y los elementos anteriores. */

let numbers3=[10,20,30,40,50,60,70]

// SOLUCION 1

let sum= numbers3.reduce((a,b)=> a+b)
console.log(`la suma de los elementos del array es : ${sum}`)

// SOLUCION 2

let s=0
for(i=0;i<numbers3.length;i++){
    s+=numbers3[i]

}

console.log(`la suma es ${s}`)





/* Dado un array de cadenas, crear una nueva matriz con solo las cadenas que contienen una subcadena específica. */

let chains=['hola mundo', 'soy carlos','aprendiendo js','esta lluviendo','di que si' ]



let leterO=chains.filter(e=>{
    return e.charAt(e.length-1)=='s'
})
console.log(leterO)



const str = "Hola mundo!";
const lastChar = str.charAt(1); // Devuelve "!"


/* charAt() te da un carácter basado en la posición, mientras que indexOf() te da la posición basada en el carácter
   o subcadena. */


/* 
Dado un objeto, crear una función que pueda convertir todas las propiedades del objeto a mayúsculas.
*/




let propertys=
{
    name:'carlos',
    age:20,
    hobby:'programar',
    fot:'pollo',
    height:1.70
}




function mayusc(obj){
    obj.NAME=obj.name

}

mayusc(propertys)


/* propertys.NAME =propertys.name
delete propertys.name
console.log(propertys) */


