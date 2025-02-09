// Usando um loop while para pedir ao usuário para digitar um número até que seja 5
const prompt = require('prompt-sync')();
let numero = prompt("Digite um número de 1 a 10:"); // Inicializando a variável com um valor qualquer para entrar no loop

while (numero !== 5) {
    
        console.log("Número errado. Tente novamente!");
    
}

console.log("Você digitou o número 5. Fim do programa.");
