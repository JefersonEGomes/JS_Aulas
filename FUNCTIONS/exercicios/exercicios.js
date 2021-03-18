// 1. Declare uma variável de nome weight
let weight // var or const

// 2. Que tipo de dado é a váriavel acima
console.log(typeof weight) // undefined
/* 
    3. Declare uma variável e atribua valores para cada um dos dados
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name = 'Jef'
let age = 19
let weight = 90.25
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado? 

    4.1 Atribua a ela as mesmas propriedade e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem: 

        <name> de idade <age> e <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    
*/
console.log(student) // 4. Object

let student = {
     name: 'Jeff',
     age: 19,
     weight: 90,
     isSubscribed: true
}; // 4.1

console.log(`${student.name} de idade ${student.age} e ${student.weight} kg`) // 4.3 Jeff de idade 19 tem 90 kg

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor , ou seja, somente o Array vazio
*/
let students = []

/* 
    6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [
    student
]

/* 
    7. Coloque no console o valor da posição zero do Array acima 
*/
console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students
*/
let student2 = {
    name: 'Juca',
    age: 20,
    weight: 64,
    isSubscribed: true
}

students[1] = student2

/* 
 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

 console.log(a)
 var a = 1
*/
undefined // hoisting
