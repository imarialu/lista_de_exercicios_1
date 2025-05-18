// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for. 

const prompt = require('prompt-sync')();

let valor;
let soma = 0;

for(let i = 0; i < 5; i++){
    valor = Number(prompt("Informe o valor desejado: "));
    soma += valor;
}

console.log(`A soma dos valores é: ${soma}`);