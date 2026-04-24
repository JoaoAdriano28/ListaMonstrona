const prompt = require('prompt-sync')()

let limite = parseFloat(prompt("Digite o número limite: "))

console.log("Números pares até " + limite + ":")

for (let numero = 0; numero <= limite; numero += 2) {
    console.log(numero)
}

