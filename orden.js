
const array=[155,6,7,3,9,6,2];
//BURBUJEO CASERO CON WHILE (ESTABA INSPIRADO)

function ordenar(vector)
{
let i=0;
let salir=false;
        while (salir!=true) 
        {
                if ((array[i])>(array[i+1])) 
                {
                    const auxiliar = array[i];
                    array[i]=array[i+1];
                    array[i+1]=auxiliar;
                    i=0;    
                }
            else
                {
                    i++;
                }

            if (i==array.length)
            {
                salir=true
            }

        }
return(array)
    
}

console.log(ordenar(array));

