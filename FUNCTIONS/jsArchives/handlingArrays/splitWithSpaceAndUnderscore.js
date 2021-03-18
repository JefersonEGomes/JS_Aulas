// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let pharse = "Eu quero viver o Amor!"
let myArray = pharse.split(" ") // Separa por espaços (" ")
console.log(myArray)

// Separar por uma letra
let array = pharse.split("o")
console.log(array)

// Colocar _
let pharseWithUnderscore = myArray.join("_")
console.log(pharseWithUnderscore)

// Colocar _ e letras minúsculas
let pharseWithUnderscoreLower = myArray.join("_")
console.log(pharseWithUnderscoreLower.toLowerCase())