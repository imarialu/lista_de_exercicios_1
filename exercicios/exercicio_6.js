// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 

const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Informe o primeiro valor: "));
let ladoB = Number(prompt("Informe o segundo valor: "));
let ladoC = Number(prompt("Informe o terceiro valor: "));

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    }if(ladoA == ladoB && ladoB == ladoC){
        console.log("Esses valores formam um triângulo eqüilátero!")
    }else if(ladoA != ladoB && ladoB != ladoC){
        console.log("Esses valores formam um triângulo escaleno!")
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){ 
        console.log("Esses valores formam um triângulo isósceles!")
}else{
    console.log("Informe um valor válido.")
}