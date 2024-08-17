// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let valor1 = 0; 
let valor2 = 1;

console.log(valor1);
console.log(valor2);

for (let i = 0; i < 8; i++) {
    let proxValor = valor1 + valor2;
    console.log(proxValor);
    
    valor1 = valor2;
    valor2 = proxValor;
}