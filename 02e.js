pasaje1={
        categoria: "primera",
        precio:100,
        descuento:20,
        estado:"disponible",
        }
pasaje2={
         categoria: "primera",
         precio:200,
         descuento:50,
         estado:"disponible",
         }
pasaje3={
        categoria: "segunda",
        precio:300,
        descuento:10,
        estado:"vendido",
        }

const pasajesf=[pasaje1,pasaje2,pasaje3];

function dtos(pasajes,dto,catego)
{
        for (let i = 0; i < pasajes.length; i++) 
        {
                if (pasajes[i].categoria==catego) 
                {
                console.log(pasajes[i].categoria);
                pasajes[i].precio=(pasajes[i].precio)-dto;
                }
                
        }
        return(pasajes)
}
let cate="primera"
console.log(dtos(pasajesf,50,cate));
            