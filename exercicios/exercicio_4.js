// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("1 - Sorvete \n2 - Chocolate \n3 - Bolo de abacaxi")
let escolha = Number(prompt("Escolha uma das opções (1, 2 ou 3): "));

switch(escolha){
    case 1:
        console.log("Você escolheu sorvete!");
        break;
    case 2:
        console.log("Você escolheu chocolate!");
        break;
    case 3:
        console.log("Você escolheu bolo de abacaxi!");
        break;
    default:
        console.log("Escolha uma opção válida.");
        break;
}

