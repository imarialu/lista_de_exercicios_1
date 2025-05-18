// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 

const prompt = require('prompt-sync')();

let qtdMacas = Number(prompt("Informe a quantidade de maçãs que deseja comprar: "));
let total = 0;


if(qtdMacas >= 1 && qtdMacas < 12){
    total = qtdMacas * 0.30;
    console.log(`Você está comprando ${qtdMacas} maçãs e o total da compra é ${total}!`);
}else if(qtdMacas >= 12){
    total = qtdMacas * 0.25;
    console.log(`Você está comprando ${qtdMacas} maçãs e o total da compra é ${total}!`);
}else{
    console.log("Informe um valor válido.");
}
