// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

let idade = parseInt(prompt('Digite a idade:'))

if ( idade <= 0){
    console.log('Valor digitado inválido.');    
} else if (idade > 0 && idade < 12){
    console.log(`A idade ${idade} é de uma CRIANÇA.`);    
} else if (idade >= 12 && idade < 19 ){
    console.log(`A idade ${idade} é de um(a) ADOLESCENTE.`);    
} else if (idade >= 19 && idade < 59){
    console.log(`A idade ${idade} é de um ADULTO.`);    
} else {
    console.log(`A idade ${idade} é de um(a) IDOSO(a).`);  
}