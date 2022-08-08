// Ejercicio 1: 
// Escribir una función SumArray que tome dos parámetros,
// un arreglo de números ordenados y un número. La función devolverá True 
// si cualquier combinación de dos números dentro del arreglo suman el 
// número del segundo parámetro, sino devolverá False.


function sumArray (arreglo, numero){

    const longitud = arreglo.length;
  
    for (let i = 0; i < longitud; i++) {
      const x1 = arreglo[i];
  
      for (let x = 0; x < longitud; x++) {
        if (i === x) continue;
        const x2 = arreglo[x];
        if (x1 + x2 === numero) return true;
      }
    }
  
    return false;

  };
  
console.log(sumArray([6, 5, 3, 10, 11, 15, 20], 8));
