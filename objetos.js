const matriz = [ [2,4,8], [1,7,10], [6,12,4,5] ];

for (let index = 0; index < matriz.length; index++) {
    console.log(matriz[index]);
    for (let index2 = 0; index2 < matriz[index].length; index2++) {
        console.log(matriz[index][index2]);
    }   
}

const persona1 = {
    nombre: "Pedro",
    apellido: "Rodriguez",
    edad: 45,
    hijos: ["Felipe", "Mafalda", "Clemente"]
}

const persona2 = {
    nombre: "Juan",
    apellido: "Toloza",
    edad: 85,
    hijos: ["Maria", "Nicolas", "Julio"]
}

const personas = [ persona1, persona2 ];

for (let index = 0; index < personas.length; index++) {
    console.log(personas[index].nombre);
    console.log(personas[index].edad);
    console.log(personas[index].hijos[1]);
    for (let index2 = 0; index2 < personas[index].hijos.length; index2++) {
        console.log(personas[index].hijos[index2]); 
    }
}

console.table(persona1);
console.log(persona1.nombre);   