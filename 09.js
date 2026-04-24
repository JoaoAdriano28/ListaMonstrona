const prompt = require('prompt-sync')()
const tabuada = parseInt (prompt("Digite qual tabuada voce quer saber : "))


for(let contador = 0; contador <= 10; contador++){
    console.log(`${tabuada} X ${contador} = ${tabuada*contador}`)
}

