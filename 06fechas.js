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

//6fechas) mostrar la fecha desarmada

function valoralquilado(casas) 
{
   
   let fechanio;

    fechanio=new Date(casas[0].fechaAlquiler)
    console.log(fechanio)
   var anio=fechanio.getFullYear();
   console.log(anio);
    let mes=fechanio.getMonth()+1;
    console.log(mes);
    let dia=fechanio.getDate();
    console.log(dia);
    let rta =dia+"-"+mes+"-"+anio;
    console.log(rta);
  // return(fechanio);
}

valoralquilado(propiedades)
//console.log("la fecha es:"+valoralquilado(propiedades).getDay);