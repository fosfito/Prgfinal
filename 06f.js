const propiedad1 = {
    tipo: "casa", // "departamento"
    importe: 333333,
    condicion: {
    venta: true,
    alquiler: false
    },
    estado: "alquilado", // "vendido" "alquilado"
    fechaAlquiler: "2020-03-01",
    }
    
    const propiedad2 = {
        tipo: "galpon", // "departamento"
        importe: 200000,
        condicion: {
        venta: true,
        alquiler: false
        },
        estado: "alquilado", // "vendido" "alquilado"
        fechaAlquiler: "2020-01-02",
        }

        const propiedad3 = {
            tipo: "casa", // "departamento"
            importe: 333000,
            condicion: {
                        venta: true,
                        alquiler: false,
                        },
            estado: "alquilado", // "vendido" "alquilado"
            fechaAlquiler: "2020-01-03",
            }
        
const propiedades=[propiedad1,propiedad2,propiedad3];

//6f) Realiza una función que calcule la ganancia de comisión de las propiedades ALQUILADAS en un
//      cierto mes.

function comision(casas,mesi)
{
    var fecha;
    let comision=0;
    for (let i = 0; i < casas.length; i++) 
    {
        fecha=new Date(casas[i].fechaAlquiler);
        let mes=fecha.getMonth();
        console.log("mes: "+mes);
        if ((casas[i].estado=="alquilado")&&(parseInt(mesi)===parseInt(mes)))
        {
            comision+=parseFloat(casas[i].importe);    
        }
        
    }
    return(comision)
}
let imes=parseInt(prompt("Ingrese el mes"));
//let ianio=parseInt(prompt("Ingrese el año"));
console.log(comision(propiedades,imes));