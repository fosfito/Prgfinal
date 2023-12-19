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

//6c) Realiza una función que permita modificar su importe.

function cambiarestado(casas, orden,precio)
{
    casas[orden].importe=parseFloat(precio);
    
}
let id =prompt("ingrese el numero de casa a cambiar el estado 0-2");
let valor =prompt("ingrese el nuevo importe");
cambiarestado(propiedades,id, valor);
console.log(propiedades);