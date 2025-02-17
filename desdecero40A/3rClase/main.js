/* let mensaje = prompt("Ingrese un msj");
while (mensaje){
    console.log(mensaje);
    mensaje = prompt ("Ingrese un msj");
} */

/* for (let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 10; i >= 0; ){
    console/log(i);
}

console.log("Fin del ciclo") */
----------------------------
/* let vidas = 3;
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = parseInt(prompt("Adivina el numero del 1 al 10"));

while(numeroUsuario !== numeroAleatorio && vidas > 0){
    vidas--;
    console.log("Te quedan " + vidas + " vidas");
    numeroUsuario = parseInt(prompt("Adivina el numero del 1 al 10"));
} 

if(vidas > 0){
    console.log("ganaste");
} else {
    console.log("El numero era " + numeroAleatorio);
} */
--------------------------
let nombres = ["ana", "cholo", "riri", "oscar"];
let numeros = [1, 2, 3, 4];

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
    console.log(i);
}

for(let i = nombres.lenght -1; i >= 0; i--){
    console.log(nombres[i]);
    console.log(i);
}

//los arreglos siempren empiezan dede 0

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma= 0;
for (let i=0; i < numeros.length; i++){
    suma += numeros[i];
}
console.log(suma);

/* --------------------------
let numeros = [1,2,3,4,5];
let suma=0; 

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
    
}

console.log(suma); */