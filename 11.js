const prompt = require('prompt-sync')()

let soma = 0;
let numero = parseFloat(prompt("Digite um número:"));

while (numero !== 0) {
    console.log (soma += numero)

    numero = parseFloat(prompt("Digite outro número (ou 0 para parar):"))
}
console.log("A soma total dos números digitados é: " + soma)

