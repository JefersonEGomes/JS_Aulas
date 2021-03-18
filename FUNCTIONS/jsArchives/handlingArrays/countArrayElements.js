// Manipulando Arrays

// Contar elementos de um array
console.log([
    "a",
    { type: "array" },
    function () { return "alo" }].length)

// acessar elemento especifico
console.log([
    "a",
    { type: "array" },
    function () { return "alo" }][2]())

console.log([
    "a",
    { type: "array" },
    function () { return "alo" }][1].type)