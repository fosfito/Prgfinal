//6 Cuentas con datos

const cuenta1 = {
    tipo: "corriente", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"Activo",importe:100,fechaCreacion:"2015-01-01",plazo:30,}],
}

const cuenta2 = {
    tipo: "cahorro", //"ahorro"
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

const cuenta4 = {
    tipo: "corriente", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"inactivo",importe:100,fechaCreacion:"2019-01-01",plazo:30,}],
}
const cuenta5 = {
    tipo: "corriente", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"Activo",importe:100,fechaCreacion:"2020-01-01",plazo:30,}],
}

const cuenta6 = {
    tipo: "corriente", //"ahorro"
    importe: 200,
    tipomodena: "Peso",
    plazofijo: [{estado:"inactivo",importe:500,fechaCreacion:"2025-01-01",plazo:30,}],
}

export const cuenta=[cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6];