const butaca1 = {
                numero: 1,
                fila: "A",
                estado: "ocupado", // "ocupada"
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
                    estado: "ocupado", // "ocupada"
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

function ocupadas(sillas)
{
    const rdos=[0,0,0];  //izquierda, centro, derecha
    
   
    for (let i = 0; i < sillas.length; i++) 
    {
        if ((sillas[i].estado=="ocupado")&&(sillas[i].ubicacion=="izquierda"))rdos[0]++; 
        if ((sillas[i].estado=="ocupado")&&(sillas[i].ubicacion=="centro"))rdos[1]++;
        if ((sillas[i].estado=="ocupado")&&(sillas[i].ubicacion=="derecha"))rdos[2]++; 
    }
    if ((rdos[0]>rdos[1])&&(rdos[0]>rdos[2])){rta="Izquierda"}
    if ((rdos[0]==rdos[2])&&(rdos[0]>rdos[1])){rta="Izquierda y derecha"}
    if ((rdos[0]==rdos[1])&&(rdos[0]>rdos[2])){rta="Izquierda y centro"}
    if ((rdos[1]>rdos[0])&&(rdos[1]>rdos[2])){rta="centro"}
    if ((rdos[2]>rdos[1])&&(rdos[2]>rdos[0])){rta="derecha"}
    if ((rdos[2]==rdos[1])&&(rdos[2]>rdos[0])){rta="centro y derecha"}
    if ((rdos[2]==rdos[1])&&(rdos[2]==rdos[0])){rta="Homogeneo"}
    console.log("sillas:"+rta+" Rtas: "+rdos);
    return(rta)
}
console.log("La mayoria vendida esta en:"+ocupadas(butacas));