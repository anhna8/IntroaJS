/*Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.*/ 

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leidos:");
    if (librosLeidos.length === 0) {
        console.log("No has leido ningun libro todavia.");
    } else {
        librosLeidos.forEach(function(libro, index) {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

agregarLibro("harry potter");
agregarLibro("el principito");
agregarLibro("la divina comedia");
agregarLibro("la historia del loco");
agregarLibro("los hornos de hitler");
mostrarLibrosLeidos();