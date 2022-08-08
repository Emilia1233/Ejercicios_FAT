 
// Ejercicio 2: 
// Crea una función llamada “Min” que tome dos parámetros, 
// un arreglo de números desordenados y un string que va a 
// valer “Index” o “Value”. Si el string es “Value” la función 
// deberá devolver el número más chico del array. Si el string 
// es “Index” la función deberá devolver el índice (la posición) 
// del número más chico en el arreglo. 

function Min(array, palabra){


    var min = Math.min(...array) 
    
    if (palabra == "Value"){
        console.log(min)
            }

    else if (palabra == "Index"){
        var posicion = array.indexOf(min)
        console.log(posicion)
        }

    }
    
Min([6, 5, 3, 10, 11, 15, 20], "Index")
