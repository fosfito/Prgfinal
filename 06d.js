const propiedad1 = {
    tipo: "casa", // "departamento"
    importe: 100000,
    condicion: {
    venta: true,
    alquiler: false
    },
    estado: "disponible", // "vendido" "alquilado"
    fechaAlquiler: "2020-01-01",
    }
    
    const propiedad2 = {
        tipo: "galpon", // "departamento"
        importe: 200000,
        condicion: {
        venta: true,
        alquiler: false
        },
        estado: "disponible", // "vendido" "alquilado"
        fechaAlquiler: "2020-01-01",
        }

        const propiedad3 = {
            tipo: "casa", // "departamento"
            importe: 300000,
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

function agregartipomoneda(casas)
{
    for (let i = 0; i < casas.length; i++) 
    {
        casas[i].tipomoneda="Peso Argentino"    
    }
    return(casas)
}

console.log(agregartipomoneda(propiedades));