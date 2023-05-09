/* 
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras
    su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de
    cuantos números se han introducido
*/




let numbers= parseInt(prompt(`introduce un numero`))
       

while(!numbers || numbers<0){
        numbers= parseInt(prompt(`inserta de nuevo`))
}

let n=[1,2,3,4,5]

let content =[] 
let quantity
let suma

while(numbers>0){
    content.push(numbers)
    console.log(content)
    
    suma = content.reduce((total, valor) => total + valor);
    console.log(suma) 

    if(suma >50){

        content.pop(numbers)
        suma = content.reduce((total, valor) => total + valor)
        console.log(suma)
        numbers=parseInt(prompt(`inserta hasta llegar a 50 el valor es ${suma}`))

        while((suma + numbers)!==50){
            console.log(numbers)
            numbers=parseInt(prompt(`inserta hasta llegar a 50, la suma total es ${suma}`))
            
            if(suma+numbers==50){
                content.push(numbers)
                suma = content.reduce((total, valor) => total + valor)
                break
            }
        }
            
        break
    }
  
    numbers= parseInt(prompt(`introduce un numero`))
}


console.log(content)
console.log(`la suma es ${suma}`)

for(i=1;i<=content.length;i++){
    quantity=i
}
console.log(`array de ${quantity} elementos`)

