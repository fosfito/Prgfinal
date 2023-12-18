//datos del ejercicio
const cuenta1 = {
    tipo: "corriente", //"ahorro"
    importe: 100,
    tipomodena: "Peso",
    plazofijo: [{estado:"activo",importe:100,fechaCreacion:"2015-01-01",plazo:38}]
}

const cuenta2 = {
    tipo: "ahorro", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"activo",importe:100,fechaCreacion:"2020-01-01",plazo:32},
                {estado:"inactivo",importe:100,fechaCreacion:"2020-01-01",plazo:35},
                {estado:"activo",importe:100,fechaCreacion:"2020-01-01",plazo:20}]
}
const cuenta3 = {
    tipo: "ahorro", //"ahorro"
    importe: 300,
    tipomodena: "dolar",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2023-01-01",plazo:30}]
}

const cuenta4 = {
    tipo: "corriente", //"ahorro"
    importe: 400,
    tipomodena: "Peso",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2019-01-01",plazo:32}]
}
const cuenta5 = {
    tipo: "corriente", //"ahorro"
    importe: 500,
    tipomodena: "Peso",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2020-01-01",plazo:30}]
}

const cuenta6 = {
    tipo: "corriente", //"ahorro"
    importe: 600,
    tipomodena: "Peso",
    plazofijo: [{estado:"inactivo",importe:500,fechaCreacion:"2025-01-01",plazo:30}]
}

const cuentas=[cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6];
// fin de datos
//PROGRAMA

function recargo(cuentasf, porcentaje) 
{
    for (let i = 0; i < cuentasf.length; i++) 
    {
        if (cuentasf[i].plazofijo[1]>500000) 
        {

        }
    }
        
}
