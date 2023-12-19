const aula1 = {
    capacidad: 50,
    nombre: "Aula 1",
    horarios: [
    { hora: "08:00", estado: "ocupada", materia: "Matematicas" }, // "ocupado"
    { hora: "09:00", estado: "ocupada", materia: "Matematicas" },
    { hora: "10:00", estado: "ocupada", materia: "Fisica" },
    { hora: "11:00", estado: "ocupada", materia: "Informatica" },
    { hora: "12:00", estado: "disponible", materia: null },
    // .... etc
    ]
    }
 const aula2 = {
        capacidad: 25,
        nombre: "Aula 22",
        horarios: [
        { hora: "08:00", estado: "ocupada", materia: "Matematicas" }, // "ocupado"
        { hora: "09:00", estado: "disponible", materia: null },
        { hora: "10:00", estado: "disponible", materia: null },
        { hora: "11:00", estado: "ocupada", materia: "Informatica" },
        { hora: "12:00", estado: "disponible", materia: null },
        // .... etc
        ]
    }
const clases=[aula1,aula2];

//5.a) Realiza una función que dada un número de alumnos devuelva las aulas disponibles y el horario.

function disponibilidad(cant,aulas)
{
    const rta=[];
    for (let i = 0; i < aulas.length; i++) 
    {
        if (aulas[i].capacidad>cant) 
        {
            for (let j = 0; j < aulas[i].horarios.length; j++) 
            {
             if(aulas[i].horarios[j].estado=="disponible")
             {
                rta.push(aulas[i].nombre, aulas[i].horarios[j]);
                  
             }
                
            }
        }
        
    }
    return rta
}
     
console.log(disponibilidad(10,clases))