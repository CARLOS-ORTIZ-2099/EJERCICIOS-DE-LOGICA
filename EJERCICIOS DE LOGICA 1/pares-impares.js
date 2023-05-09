/* 
7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
    Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par
    guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/




let arrayone=[55,23,12,5,41]
let pares=[]
let impares=[]

let random= Math.floor(Math.random()*10)+1
console.log(random)

for(i=0;i<arrayone.length;i++){
    console.log(arrayone[i]*random)
}

arrayone.forEach(e=>{
    if(e*random%2==0){
        pares.push(e*random)
    }else{
        impares.push(e*random)
    }
})

console.log(`numeros pares ${pares}`)
console.log(`numero impares ${impares}`)