const propiedad1 = {
    tipo: "casa", // "departamento"
    importe: 1,
    condicion: {
    venta: true,
    alquiler: false
    },
    estado: "alquilado", // "vendido" "alquilado"
    fechaAlquiler: "2020-01-01",
    }
    
    const propiedad2 = {
        tipo: "galpon", // "departamento"
        importe: 200000,
        condicion: {
        venta: true,
        alquiler: false
        },
        estado: "alquilado", // "vendido" "alquilado"
        fechaAlquiler: "2020-01-01",
        }

        const propiedad3 = {
            tipo: "casa", // "departamento"
            importe: 333000,
            condicion: {
            venta: true,
            alquiler: false
            },
            estado: "disponible", // "vendido" "alquilado"
            fechaAlquiler: "2020-01-01",
            }
        
const propiedades=[propiedad1,propiedad2,propiedad3];

//6d) Realiza una función que permita agregar tipo de moneda como dato a todas las
//    propiedades y le asigne un valor por defecto.

function valoralquilado(casas) 
{
    let total=0;
    for (let i = 0; i < casas.length; i++) 
    {
        if(casas[i].estado=="alquilado")
        {
            total+=casas[i].importe;
        }
    }    
    return total
}

console.log("El total alquilado es de: $"+valoralquilado(propiedades));