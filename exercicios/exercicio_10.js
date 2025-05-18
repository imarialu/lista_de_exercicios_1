// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let valor = Number(prompt("Informe um número: "));
let contador = 1;

while(contador <= 10){
    console.log(valor);
    contador++;
}