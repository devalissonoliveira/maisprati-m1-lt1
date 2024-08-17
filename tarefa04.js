// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("Escolha uma das opções abaixo:");
console.log("1. Mostrar mensagem de boas-vindas");
console.log("2. Mostrar Data e Hora Atual");
console.log("3. Sair");


const opcaoEscolhida = Number(prompt("Escolha apenas uma das opções a cima: "));

switch (opcaoEscolhida) {
    case 1:
        console.log('Olá, seja bem-vindo(a) a nossa aplicação!');
        break;
    case 2:
        const dataHoraAtual = new Date();
        console.log(`Data e hora atual: ${dataHoraAtual}`);
        break;
    case 3:
        console.log('Saindo...');
        break;
    default:
        console.log("Opção inválida.");
        break;
}
