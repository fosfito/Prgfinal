let fecha="2023-12-19";
let nacimiento="1980-04-03";

console.log("tu edad es: "+(new Date(fecha)-new Date(nacimiento)));

let dias=Math.round((new Date(fecha)-new Date(nacimiento))/(1000*60*60*24)) //ms,seg,min,hs de un dia
let mes=Math.round((new Date(fecha)-new Date(nacimiento))/(1000*60*60*24*30)) //ms,seg,min,hs,dias,meses de un año para que de en años
let anio=Math.round((new Date(fecha)-new Date(nacimiento))/(1000*60*60*24*30*12)) //ms,seg,min,hs,dias de un mes para que de en meses

console.log(("Dias: "+dias+" Meses: "+mes+"años: "+anio));