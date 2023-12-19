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

//5.b) Realiza una función que dado un número de alumnos y un horario de inicio y fin, devuelva
//     si se encuentran aulas disponibles para asignar según los requisitos.

