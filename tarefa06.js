// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

const ladoA = Number(prompt('Digite o valor do Lado A:  '))
const ladoB = Number(prompt('Digite o valor do Lado B:  '))
const ladoC = Number(prompt('Digite o valor do Lado C:  '))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo eqüilátero');      
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        console.log('Triângulo escaleno');   
    } else {        
        console.log('Triângulo isósceles');  
    }
} else {
    console.log('Valores digitados não formam um triângulo.');  
}