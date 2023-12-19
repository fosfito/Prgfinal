// 2f) Realiza una función que permita buscar pasajes de una cierta categoría y que estén disponibles.
const pasaje1={
        categoria: "primera",
        precio:200,
        descuento:20,
        estado:"disponible",
        }
const pasaje2={
         categoria: "primera",
         precio:300,
         descuento:50,
         estado:"disponible",
         }
const pasaje3={
        categoria: "primera",
        precio:100,
        descuento:10,
        estado:"vendido",
        }

const pasajesf=[pasaje1,pasaje2,pasaje3];

function buscar(pasajes,category)
{
const rta=[];
for (let i = 0; i < pasajesf.length; i++) 
{
        if ((pasajes[i].estado==="disponible")&&(pasajes[i].estado===category))
        {
                console.log("PASO");
                rta.push(pasajes[i]);        
        }
        
}
return(rta)
}

let categoriai=prompt("Ingrese primera o segunda:");
console.log(buscar(pasajesf,categoriai));            