/*
90 o más, el estudiante aprueba con "Excelente".
75 y 89, el estudiante aprueba con "Bien".
60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.

Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.
Usa una condición if para verificar si el valor de nota es mayor que 0 (truthy).
Utiliza operadores de comparación (<,>, <=, >=) para determinar el rango de la nota.
Imprime en la consola un mensaje que indique la nota que obtuvo el alumno.
*/ 



let nota = 4;

if (nota>=90){
    console.log("excelente");
} else if (nota>=75){ 
    console.log("bien");
} else if (nota>=60){
    console.log("suficiente");
} else if (nota=59){ 
    console.log("No aprobó");
}


