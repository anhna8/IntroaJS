 const frutas = ["manzana", "pera", "sandia", "fresa", "kiwi"];

const cantidadFrutas = {
    manzana: 5,
    pera: 3,
    kiwi:10,
    sandia:1,
    fresa: 15
}

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    console.log(cantidadFrutas[frutas[i]]);
} 

let i = 0;

while(i < frutas.length){
    const frutas = frutas[i];
    if (cantidadFrutas[fruta]){
        cantidadFrutas[frutas]++;
    } else {
        cantidadFrutas[frutas] = 1;
    }
}

console.log("cantidad de cada tipo de fruta: ", cantidadFrutas);
