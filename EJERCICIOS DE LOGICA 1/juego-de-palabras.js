let vocales=['a','e','i','o','u']
const consonantes = ['B', 'C', 'Ch', 'D', 'F', 'G', 
'H', 'J', 'K', 'L', 'Ll', 'M', 'N', 'Ñ', 'P', 'Q', 
'R', 'S', 'T', 'V', 'X', 'Z'];


let cont_vocales=[]


let text= prompt(`decime una palabra`)

let separacion= text.split('')

console.log(separacion)

/*  PRIMERA FORMA DE CONSTATAR SI UN ELEMENTO ESAT INCLUIDO EN OTOR ARRAY
for(let i=0; i<separacion.length;i++){
    if(consonantes.includes(separacion[i].toUpperCase())){
        cont_consonantes.push(separacion[i])
    }

} */


// SEGUNDA MANERA DE CONSTATAR SI UN ELEMENTO ESTA INCLUIDO EN OTRO

let cont_consonantes=separacion.filter(e=>{
    return consonantes.includes(e.toUpperCase())
})


let i=1
separacion.forEach(e=>{
    
    switch(e){
        case('a'):
        cont_vocales.push(i)
        break;
        case('e'):
        cont_vocales.push(i)
        break;
        case('i'):
        cont_vocales.push(i)
        break;
        case('o'):
        cont_vocales.push(i)
        break;
        case('u'):
        cont_vocales.push(i)
        break;
        }   
})

const suma= cont_vocales.reduce((a,b)=>{
    return a+b
})

console.log(`la longitud es ${separacion.length} y las vocales encontradas : ${suma} `)

console.log(`consonantes totales: ${cont_consonantes.length}`)






/* El método split() devuelve un array que contiene las subcadenas obtenidas después de dividir 
   la cadena original utilizando el separador especificado. */





/* el método toUpperCase() en JavaScript no requiere parámetros. Simplemente convierte todas las 
   letras en minúsculas de una cadena de caracteres en letras mayúsculas. */


















