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

//6b) Realiza una función permita modificar su estado de venta o alquiler.

function cambiarestado(casas, orden)
{
    casas[orden].condicion.venta=!casas[orden].condicion.venta;
    casas[orden].condicion.alquiler=!casas[orden].condicion.alquiler;
}

let id =prompt("ingrese el numero de casa a cambiar el estado 0-2");
cambiarestado(propiedades,id)
console.log(propiedades);