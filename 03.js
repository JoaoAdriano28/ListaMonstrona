const prompt = require('prompt-sync')()

const salario = parseFloat(prompt(`me informe o salario que voce recebeu: `))

console.log(`o seu salario recebeu um aumento de 15%, entao voce recebera ${(salario*1.15).toFixed(2)} reais!`)

