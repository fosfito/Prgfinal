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
                    estado: "libre", // "ocupada"
                    ubicacion: "izquierda"// "derecha" // "centro"
                }

const butaca4 = {
                    numero: 4,
                    fila: "A",
                    estado: "libre", // "ocupada"
                    ubicacion: "izquierda" // "derecha" // "centro"
                    }
const butacas=[butaca1,butaca2,butaca3,butaca4];

//3b) Realiza una función que devuelva las butacas libres dada una cierta ubicación.

function buscarbut(asientos,locacion) 
{
    const rta=[];
    for (let i = 0; i < asientos.length; i++) 
    {
        if ((asientos[i].ubicacion==locacion)&&(asientos[i].estado=="libre")) 
        {
            rta.push(asientos[i])    
        }
        
    }    
    return(rta)
}

let posi=prompt("ingrese zona: izquierda, centro o derecha ")
console.log(buscarbut(butacas,posi));
