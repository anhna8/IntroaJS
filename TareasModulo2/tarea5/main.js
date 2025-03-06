class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }

    descripcionLibro() {
        return `libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }
} 
    const miLibro1 = new Libro("Harry Potter y la piedra filosofal", "Joanne Rowling", 1997, "disponible");
    const miLibro2 = new Libro("La historia del loco", "John Katzenbach", 2004, "prestado" );
    const miLibro3 = new Libro("La divina comedia", "Dante Alighieri", 1472, "disponible" );
    const miLibro4 = new Libro("Los hornos de Hitler", "Olga Lengyel", 1947, "prestado" );


console.log(miLibro1.descripcionLibro());
console.log(miLibro2.descripcionLibro());
console.log(miLibro3.descripcionLibro());
console.log(miLibro4.descripcionLibro());




