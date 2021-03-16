/*
    Function() constructor

    *  expressão new
    *  criar um novo objeto
    *  this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const jef = new Person('Jef')
const jayke = new Person('Jayke')
console.log(jef.walk())
console.log(jayke.walk())