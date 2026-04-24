const prompt = require('prompt-sync')()

const numero = parseInt(prompt(`me informe seu numero: `))

if (numero%2==0){
    console.log(`o seu numero é par`)
}else{
    console.log(`o seu numero é impar`)
}

