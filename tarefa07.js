// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

const qtdMacas = parseInt(prompt('Digite a quantidade de maçãs: '));
    
let custoUnidMaca;
let valorTotalCompra;

if (qtdMacas <= 0){
    console.log('Quantidade de maçãs informada errada.');    
} else if ( qtdMacas > 0 && qtdMacas < 12) {
    custoUnidMaca = 0.30;
    valorTotalCompra = qtdMacas * custoUnidMaca;    
    console.log(`Foram compradas ${qtdMacas} à ${custoUnidMaca} dando um valor total de: ${valorTotalCompra}`);
} else if (qtdMacas >= 12){
    custoUnidMaca = 0.25;
    valorTotalCompra = qtdMacas * custoUnidMaca;    
    console.log(`Foram compradas ${qtdMacas} à ${custoUnidMaca} dando um valor total de: ${valorTotalCompra}`);
}