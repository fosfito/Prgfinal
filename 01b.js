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


const cuenta=[cuenta1, cuenta2, cuenta3];
// fin de datos


function mayores30d(cuentas) 
    {
        console.log("Plazos fijos mayores a 30");
        for (let i = 0; i < cuentas.length; i++) 
        {
           const cuentaUsuario=cuentas[i];
           for (let j = 0; j < cuentaUsuario.plazofijo.length; j++) 
            {
             if ((cuentaUsuario.plazofijo[j].estado=="activo")&&(cuentaUsuario.plazofijo[j].plazo>30))
                {
                console.log(cuentaUsuario);
                break;   //ya encontro 1 ese usuario sale registrado
                }   
            }
        }
    }

mayores30d(cuenta);