// Ejercicio 4: 
// Crear una función llamada “paresEimpares” que reciba 3 parámetros,
// los dos primeros que sean números enteros y el tercero un string 
// la función tiene que mostrar por consola los números entre el 0 y el 
// primer parámetro que recibe, pero debe, en primer lugar mostrar todos
// los números pares además, cuando el número sea divisible por el segundo
// parámetro pasado en la función en vez de mostrarlo por consola debe imprimir
// la palabra que recibe como tercer parámetro. 

function paresEimpares(n1, n2, palabra){
var cont = 0

    for (i=0; i<n1; i++){
        if(i%2==0){
            console.log(i)
        }
        else if(n1%n2 === 0){
        console.log(palabra)
        }
}
}

paresEimpares(10, 2, "palabra")
