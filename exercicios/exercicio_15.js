// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let valor1 = 0;
let valor2 = 1;

console.log("Esses são os primeiros 10 números da sequência de Fibonacci: ");

for(let i = 1; i <= 10; i++){
    console.log(valor1);
    let proximo = valor1 + valor2;
    valor1 = valor2;
    valor2 = proximo;
}