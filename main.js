//EJERCICIO 1

let arregloNumeros = [2,4,6,8,10];
let longitud = arregloNumeros.length;

console.log("la longitud es: " + longitud);

// EJERCICIO 2

let esVerdadero = true;

if(esVerdadero == true){
    console.log("el valor es verdadero: " + esVerdadero);
}

//EJERCICIO 3

let frutas = ["manzana","bananas","uvas"];
 
for(let i = 0; i < frutas.length; i++ ) {
    console.log("las frutas son: " + frutas);
}

// EJERCICIO 4 

let a = 1;

while (a <= 10) {
    console.log(a);
    a++;
}

// EJERCICIO 5 

let b = 100;
let k = 0;
for (let i = 1 ; i <= b ; i+=2){
    k = k+i;
    console.log("la suma de pares es:"+k);
}

// EJERCICIO 6 



// EJERCICIO 7

let p = 50;
let e = 0;
for (let n = 1 ; n <= p ; n+=3){
    e = e+n;
    console.log("la suma de impares es:"+e);
}

// EJERCICIO 8

let lista = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < lista.length; index++) {
    let = lista[index];

    if (lista[index]%2==0) {
        console.log("par valido " + lista[index]);
    }
    else {
        console.log("impar valido" + lista[index]);
    }
}