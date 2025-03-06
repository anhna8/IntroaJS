const persona = {
    nombre: "ana",
    edad: 27,
    ciudad: "CDMX",
    mayorEdad: true,
    pasatiempos: ["mascotas", "pole", "pintar"],
    mascota:{
        nombre:"riri",
        edad: 3,
        raza: "perro",
    },    
    saludar: function(){
        console.log("Holi soy " + this.nombre);
    },
    presentarse: function(){
        console.log(`holi me llamo ${this.nombre} tengo ${this.edad} y mi perrita se llama ${this.mascota.nombre}`);
    },
}
console.log(persona);

console.log(persona.nombre);
console.log(persona.edad);

for (let i = 0; i < persona.pasatiempos.length; i++){
    const element = persona.pasatiempos[i];
    console.log(element);
}

console.log(persona.mascota.nombre);
console.log(persona["nombre"]);
persona.saludar();

let  { nombre, edad, ciudad } = persona;
console.log(nombre);

const persona2 = {
    nombre: 'cholo ',
    edad: 2,
    ciudad: 'oaxaca',
    mayorEdad: true,
    pasatiempos: ['correr', 'koko', 'comer'],

    comidas: {
        nombre: "pollo",
        nombre2: "carne molida",
    },
    presentarse: function() {
        console.log("holi soy " + this.nombre + " de " + this.ciudad + " tengo " + this.edad + " años y mis pasatiempos son " + this.pasatiempos.join(', ') + " mis comidas favoritas son " + this.comidas.nombre + " y " + this.comidas.nombre2 + ".");
    }
}



persona2.presentarse();
console.log("holi soy " + persona2.nombre + " mis pasatiempos son " + persona2.pasatiempos + " y tengo dos comidas favoritas " + persona2.comidas);

const albums = [
    {
        nombre: "album 1",
        canciones: ["cancion 1", "cancion 2", "cancion 3"],
    },
    {
        nombre: "album 2",
        canciones: ["cancion 3"],
    },
    {
        nombre: "album 3",
        canciones: ["cancion 1", "cancion 2"],
    },
]

for(let i = 0; i < albums.lenght; i++){
    console.log(albums[i].nombre);
    for(let j = 0; j < albums[i].canciones.lenght; j++){
        console.log(albums[i].canciones[j]);
    }
}


class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    saludar(){
        console.log(`holi soy ${this.nombre} y tengo ${this.edad} años`);
    }
    cumplirAnios(){
        this.edad++;
    }
}

const persona3 = new Persona("cholo", 2, "masculino");
const persona4 = new Persona("riri", 3, "femenino");

persona4.saludar();
persona3.saludar();

persona3.cumplirAnios();

class estudiante extends Persona {
    constructor(nombre, edad, genero, carrera){
        super(nombre, edad, genero);
        this.carrera = carrera;
    }
    estudiar(){
        console.log(`estoy estudiando ${this.carrera}`);
    }
}

const Estudiante = new estudiante("ana", 27, "femenino", "programadora");
console.log(estudiante);

Estudiante.saludar();