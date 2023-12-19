const butaca1 = {
                numero: 1,
                fila: "A",
                estado: "ocupada", // "ocupada"
                ubicacion: "centro" // "derecha" // "centro"
                }
const butaca2 = {
                    numero: 2,
                    fila: "A",
                    estado: "libre", // "ocupada"
                    ubicacion: "centro" // "derecha" // "centro"
                }
const butaca3 = {
                    numero: 3,
                    fila: "A",
                    estado: "ocupada", // "ocupada"
                    ubicacion: "izquierda"// "derecha" // "centro"
                }

const butaca4 = {
                    numero: 4,
                    fila: "A",
                    estado: "ocupada", // "ocupada"
                    ubicacion: "izquierda" // "derecha" // "centro"
                    }
const butacas=[butaca1,butaca2,butaca3,butaca4];

//3b) Realiza una función que devuelva las butacas libres dada una cierta ubicación.

function ocupadas(sillas)
{
    let contador=0;
    for (let i = 0; i < sillas.length; i++) 
    {
        if(sillas[i].estado=="ocupada")
        {
            contador++;
        }
    }
    return(contador)
}
console.log("Las butacas ocupadas son:"+ocupadas(butacas));