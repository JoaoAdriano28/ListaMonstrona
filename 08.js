const prompt = require('prompt-sync')()

const senha = prompt(`me informe sua senha: `)
const senha_salva = prompt(`digite sua senha novamente: `)
if (senha == senha_salva){
    console.log(`a sua senha esta correta, seja bem vindo(a)`)
}else{
    console.log(`a sua senha esta incorreta, tente novamente mais tarde!`)
}

