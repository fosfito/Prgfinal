//datos del ejercicio
const cuenta1 = {
    tipo: "corriente", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"activo",importe:100,fechaCreacion:"2015-01-01",plazo:38}]
}
const cuenta2 = {
    tipo: "ahorro", //"ahorro"
    importe: 23000,
    tipomodena: "Peso",
    plazofijo: [{estado:"activo",importe:100,fechaCreacion:"2020-01-01",plazo:32},
                {estado:"inactivo",importe:100,fechaCreacion:"2020-01-01",plazo:35},
                {estado:"activo",importe:100,fechaCreacion:"2020-01-01",plazo:20}]
}
const cuenta3 = {
    tipo: "ahorro", //"ahorro"
    importe: 200,
    tipomodena: "dolar",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2023-01-01",plazo:30}]
}

const cuentas=[cuenta1, cuenta2, cuenta3];
// fin de datos

//a) Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
// fecha dada. FALLA

function buscarvalores(fecha1,cuentas) 
{
    const rdo=[];
    console.log(fecha1);
    for (let i = 0; i < cuentas.length; i++) 
    {
        for (let j = 0; j < cuentas[i].plazofijo.length; j++) 
        {
            var fecha2=Math.round(new Date(cuentas[i].plazofijo[j].fechaCreacion));
            if ((fecha1-fecha2)>0) 
            {
            rdo.push(cuentas[i].tipo, cuentas[i].importe, cuentas[i].tipomodena,cuentas[i].plazofijo[j])    
            }
        }  
        return(rdo)      
    }
    var fecha2
}
let fecha=prompt("Ingrese la fecha formato yyyy-mm-dd")
let fecha1=Math.round(new Date(fecha))
console.log(buscarvalores(fecha1, cuentas))
