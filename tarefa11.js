// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

let somaTotal = 0;
let valorDigitado;

for(i = 1; i <= 5; i++){
    valorDigitado = Number(prompt(`Digite o ${i}º valor:  `))
    somaTotal += valorDigitado;
}

console.log(`A soma dos valores é: ${somaTotal}`);