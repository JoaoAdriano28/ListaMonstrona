const prompt = require('prompt-sync')()

const nota_final = parseFloat(prompt("Digite sua nota: "))
const faltas = parseInt(prompt("Digite sua frequencia de presenca :"))


if(nota_final >=7){
    if(faltas >=75){
        console.log("voce esta aprovado")
    }else {
        console.log("Voce esta aprovado em nota, Mas reprovou em faltas")
    }
}else if (nota_final >=4 && nota_final < 7){
    console.log("voce esta de exame!")
}else {
    console.log("Voce esta reprovado!")
}

