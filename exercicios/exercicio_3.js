// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. 

const prompt = require('prompt-sync')();

let nota = Number(prompt("Informe a nota: "));

if(nota == 0){
    console.log("Você está reprovado.");
}else if(nota > 0 && nota < 7){
    console.log("Você está de recuperação.");
}else if(nota >= 7 && nota <= 10){
    console.log("Você está aprovado!");
}else{
    console.log("Informe uma nota válida.");
}