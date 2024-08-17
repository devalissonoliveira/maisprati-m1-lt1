// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let nota = Number(prompt('Digite uma nota:'))

if (nota >= 7){
    console.log('APROVADO!');
} else if (nota >= 5 && nota < 7) {
    console.log('RECUPERAÇÃO!');
}  else {
    console.log('REPROVADO!');    
}