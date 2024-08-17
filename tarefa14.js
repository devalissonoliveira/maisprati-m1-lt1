// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let numeroDigitado;
let fatorial = 1;
let i = 1;

do{
    numeroDigitado = parseInt(prompt('Digite um número inteiro: '))
} while (numeroDigitado < 0)

while (i <= numeroDigitado) {
    fatorial *= i;
    i++;
}

console.log(`O fatorial de ${numeroDigitado} é: ${fatorial}`);