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

function dtos(pasajes,valor)
{
const rta=[];
for (let i = 0; i < pasajes.length; i++) {
        if (pasajes[i].precio>=valor) 
        {
               rta.push(pasajes[i])
        }
        
}return(rta)
}
let valordto=201;
console.log(dtos(pasajesf,valordto));
            