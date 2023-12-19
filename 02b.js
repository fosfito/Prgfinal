pasaje1={
        categoria: "primera",
        precio:200,
        descuento:20,
        estado:"disponible",
        }
pasaje2={
         categoria: "primera",
         precio:300,
         descuento:50,
         estado:"disponible",
         }
pasaje3={
        categoria: "primera",
        precio:100,
        descuento:10,
        estado:"vendido",
        }

const pasajesf=[pasaje1,pasaje2,pasaje3];

function ordenar(pasajes)
{
    pasajes.sort(function(a,b)
    {return a.precio-b.precio});
    return(pasajes);
}

console.log(ordenar(pasajesf));
            