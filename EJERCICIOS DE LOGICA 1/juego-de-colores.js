/* let numeros=[1,2,3,4,5,6,7]


let user=prompt(`escribe un numero`)

let separacion=user.split('')
console.log(separacion)

const numeros_filtrados=  separacion.filter(e=>{
 return  numeros.includes(parseInt(e)) 
})

console.log(`los numeros coincidentes son: ${numeros_filtrados}`) */



let colores=['azul','amarillo','rojo','verde','rosa']

let color= prompt(`decime un color`).toLocaleLowerCase()


// PRIMERA FORMA DE RESOLVERLO

const evaluacion= colores.filter(e=>{
     return e==color
})

if(evaluacion.length>0){
console.log(`el color coincidente es: ${evaluacion}`)
}

else{
    console.log(`el color ${evaluacion} no existe`)
}



// SEGUNDA FORMA DE RESOLVERLO

if(colores.indexOf(color)!==-1){
    console.log(`el color existe y es: ${color} `)
}
else{
    console.log(`${color} no existe`)
}

