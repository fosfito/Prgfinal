const cuenta1 = {
    tipo: "corriente", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"Activo",importe:100,fechaCreacion:"2015-01-01",plazo:30,}],
}

const cuenta2 = {
    tipo: "ahorro", //"ahorro"
    importe: 23000,
    tipomodena: "Peso",
    plazofijo: [{estado:"Activo",importe:100,fechaCreacion:"2020-01-01",plazo:30,}],
}
const cuenta3 = {
    tipo: "ahorro", //"ahorro"
    importe: 200,
    tipomodena: "dolar",
    plazofijo: [{estado:"Activo",importe:100,fechaCreacion:"2023-01-01",plazo:30,}],
}

export const cuentas = [cuanta1, cuenta2, cuenta3];