pasaje1={
        categoria: "primera",
        precio:100,
        descuento:10,
        estado:"disponible",
        }
pasaje2={
         categoria: "primera",
         precio:100,
         descuento:10,
         estado:"disponible",
         }
pasaje3={
        categoria: "primera",
        precio:100,
        descuento:10,
        estado:"vendido",
        }

const pasajesf=[pasaje1,pasaje2,pasaje3];

function disponibles(pasajes)
{
    let cant=0;
    for (let i = 0; i < pasajes.length; i++) 
    {
        if (pasajes[i].estado=="disponible")
        {
            cant++;    
        }
    }
    return(cant);
}

console.log(disponibles(pasajesf));
            