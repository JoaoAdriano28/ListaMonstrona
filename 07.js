const prompt = require('prompt-sync')()

let idade = parseInt(prompt(`olá senhor(a) me informe sua idade:`))

if (idade <=18){
    console.log(`voce ainda tem desconto no cinema, pois ainda é estudante!!`)
}else{
    console.log(`voce nao tem mais desconto no cinema, pois não é mais estudante!!`)
}

if (idade >=60){
    console.log(`voce ainda tem desconto no cinema`)
}else{
    console.log(`voce nao tem mais desconto no cinema`)
}

