// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();

let valor = null;
let soma = 0;
let contador = 0;

while(valor != 0){
    valor = Number(prompt("Informe o numero desejado: "));

    soma += valor;
    contador++;
}

let media = soma/(contador - 1);
console.log(`Soma dos números: ${soma} \nMédia dos números: ${media}`);