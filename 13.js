const prompt = require('prompt-sync')()

const nota_final = parseFloat(prompt("Digite sua nota: "))


if(nota_final >10){
    console.log("Entrada invalida, notas somente entre 0 e 10")
}else{
    console.log("Entrada valida, sua nota esta entre 0 e 10")
}

