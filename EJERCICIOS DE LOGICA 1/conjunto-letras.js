
/* function values(){

let number= parseInt(prompt(`escribe tu dni`))

let array=[]
array.push(number)

const strings= array.toString().split('')
console.log(strings)

const numbers= strings.map(e=>{
  return  parseInt(e)
})

return numbers

}


let container = values()



while(container.length!==8 ){
 container = values()
}

console.log(container) */

/*  
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede
    ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido
    entre 23
*/ 



let number

function valor(){
  number= parseInt(prompt(`escribe tu dni`))
  
  let value= number.toString().split('')
  return value

}

let fx= valor()

while(fx.length!=8){
   fx=valor()
  
}

const modulo=  number%23

console.log(`el modulo es: ${modulo}`)


const leters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','y','x','y','z',]

for(i=0;i<leters.length;i++){
      console.log(` ${leters[i]} =  ${leters.indexOf(leters[i])+1}`)
    if(modulo==leters.indexOf(leters[i])+1){
        console.log(`el modulo es: ${modulo} y su letra es: ${leters[i]}`)
        break;
      }


}








