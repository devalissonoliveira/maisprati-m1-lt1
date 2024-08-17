// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let numeroDigitado;
let soma = 0;
let contador = 0;

do{
    numeroDigitado = parseFloat(prompt('Digite um número decimal ou digite 0 para sair: '));

    if (numeroDigitado !== 0){
        soma += numeroDigitado;
        contador++
    }

} while(numeroDigitado !== 0);

if (contador > 0) {
    const media = soma / contador;
    console.log(`A média aritimética é: ${media.toFixed(2)}`);
} else {
    console.log('Não foi possivel realizar a média aritimética');    
}