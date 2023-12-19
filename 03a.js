const butaca1 = {
                numero: 1,
                fila: "A",
                estado: "ocupada", // "ocupada"
                ubicacion: "izquierda" // "derecha" // "centro"
                }
const butaca2 = {
                    numero: 2,
                    fila: "A",
                    estado: "libre", // "ocupada"
                    ubicacion: "izquierda" // "derecha" // "centro"
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
                    estado: "libre", // "ocupada"
                    ubicacion: "izquierda" // "derecha" // "centro"
                    }
const butacas=[butaca1,butaca2,butaca3,butaca4];

//3a) Dada una lista con las butacas de un cine con la siguiente información:
function buscarlibres(asientos) 
{
    const rta = [];
    for (let i = 0; i < asientos.length; i++) 
    {
        if (asientos[i].estado=="libre") 
        {
            rta.push(asientos[i])
        }
        
    }    
    return(rta)
}
console.log(buscarlibres(butacas));
