//datos del ejercicio
const cuenta1 = {
    tipo: "corriente", //"ahorro"
    importe: 100,
    tipomodena: "peso",
    plazofijo: [{estado:"activo",importe:100,fechaCreacion:"2015-01-01",plazo:38}]
}

const cuenta2 = {
    tipo: "ahorro", //"ahorro"
    importe: 200,
    tipomodena: "peso",
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
    tipomodena: "euro",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2019-01-01",plazo:32}]
}
const cuenta5 = {
    tipo: "corriente", //"ahorro"
    importe: 500,
    tipomodena: "peso",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2020-01-01",plazo:30}]
}

const cuenta6 = {
    tipo: "corriente", //"ahorro"
    importe: 600,
    tipomodena: "euro",
    plazofijo: [{estado:"inactivo",importe:500,fechaCreacion:"2025-01-01",plazo:30}]
}

const cuenta=[cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6];
// fin de datos
//INICIO EJERCICIO

const RtaC=[];
function pormoneda(cuentas,moneda) 
    {
        for (let i = 0; i < cuentas.length; i++) 
        {
         const Uncliente=cuentas[i];
         if (Uncliente.tipomodena===moneda) 
            {
                RtaC[RtaC.length]=Uncliente;
            }    
        }        
        return(RtaC)
    }

    const Tmoneda=prompt("Tipo de moneda: 1=Peso  2=dolar   3=euro")
    if (Tmoneda==1) 
    {
    console.log("peso");
    console.log(pormoneda(cuenta,"peso"));    
    }
    else
    {
        if (Tmoneda==2) 
        {
        console.log(pormoneda(cuenta,"dolar"))    
        }
        else
        {
            if (Tmoneda==3) 
            {
            console.log(pormoneda(cuenta,"euro"))    
            }
            else
            {
                console.log("Error de tipeo")
            }
        }
    }