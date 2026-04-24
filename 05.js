const prompt = require('prompt-sync')()

const idade = prompt('em qual ano voce nasceu ? ')
const verificacao = 365-ano

if(verificacao >= 18){
    console.log(`voce ja é de maior!`)
}else{
    console.log(`voce nao é de maior!`)
}




