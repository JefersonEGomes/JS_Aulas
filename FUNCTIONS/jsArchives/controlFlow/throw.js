// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário") // throw 'Nome é obrigátorio'
    }

    console.log(name)
}

// try...catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
}