const prompt = require('prompt-sync')()

const idade = parseInt(prompt(`me informe a sua idade: `))
const dias = parseInt(prompt(`quantos dias temos no ano: `))

const conversor = (idade*dias)
console.log(`sua idade converdida em dias é ${conversor} dias!`)

