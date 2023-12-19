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

//5.c) Realiza una función que dado un nombre de materia se pueda liberar el aula (volverla
//      disponible en el horario de la materia).

function liberaraula(mater,cursos)
{
    for (let i = 0; i < cursos.length; i++) 
    {
        for (let j = 0; j < cursos[i].horarios.length; j++) 
        {
            if (cursos[i].horarios[j].materia==mater) 
            {
                cursos[i].horarios[j].estado="DISPONIBLE";
                cursos[i].horarios[j].materia=null;     
            }            
        }        
    }
}
liberaraula("Matematicas",clases)
console.log(clases);