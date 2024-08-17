// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

const numeroDigitado = parseInt(prompt('Digite um número entre 1 e 10: '));

if (numeroDigitado >= 1 && numeroDigitado <= 10){
    for(i = 0; i <=10; i++){
        console.log(`${i} x ${numeroDigitado}: ${i*numeroDigitado}`);        
    }  
} else {    
    console.log(`Valor ${numeroDigitado} é inválido.`);  
}