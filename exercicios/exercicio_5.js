// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. 

const prompt = require('prompt-sync')();

let peso = Number(prompt("Informe o seu peso: "));
let altura = Number(prompt("Informe a sua altura: "));


let imc = (peso / (altura * altura));

if(imc < 18){
    console.log(`Seu IMC é ${imc.toFixed(2)} - Abaixo do peso.`);
}else if(imc >= 18 && imc < 25){
    console.log(`Seu IMC é ${imc.toFixed(2)} - Peso normal.`);
}else if(imc >= 25 && imc < 30){
    console.log(`Seu IMC é ${imc.toFixed(2)} - Sobrepeso.`);
}else if(imc >= 30 && imc < 35){
    console.log(`Seu IMC é ${imc.toFixed(2)} - Obsedidade grau I.`);
}else if(imc >= 35 && imc < 40){
    console.log(`Seu IMC é ${imc.toFixed(2)} - Obsedidade grau II.`)
}else{
    console.log(`Seu IMC é ${imc.toFixed(2)} - Obsedidade grau III.`)
}
