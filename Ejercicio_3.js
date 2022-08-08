// Ejercicio 3: 
// Crear una función llamada  “MiddleCharacter” que reciba un string por parámetro y devuelva sus caracteres del medio.
// Ejemplo:
//  “Hola” deberá retornar “ol”, “Cosas” deberá retornar “s” .

function midleCharacter(str){
    const position = Math.round(str.length / 2) -1
      if(str.length % 2 == 0) {
       console.log(str.charAt(position) + str.charAt(position + 1))
       }
      if(str.length % 2 != 0) {
       console.log(str.charAt(position))
      }
     }


midleCharacter("index")
