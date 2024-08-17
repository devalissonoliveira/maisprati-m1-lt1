// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

const primeiroNumero = Number(prompt('Digite o primeiro número: '));
const segundoNumero = Number(prompt('Digite o segundo número: '));

primeiroNumero < segundoNumero ? 
    console.log(`Em ordem crescente: ${primeiroNumero}, ${segundoNumero}`) : 
    console.log(`Em ordem crescente: ${segundoNumero}, ${primeiroNumero}`);