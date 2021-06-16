//Exercícios de interpretação de código

//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

//2. Leia o código abaixo com atenção

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

//Exercícios de escrita de código

//1.

const nomeUsuario = prompt('Digite seu nome'),
  emailUsuario = prompt('Digite seu nome'),
  resultado = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`;
console.log(resultado);

//2.

const comidasPreferidas = ['Pizza', 'Pastel', 'Estrogonofe', 'Lasanha'],
  msg = `Essas são as minhas comidas preferidas: ${comidasPreferidas.join(
    ' '
  )}`,
  comidaPreferida = prompt('Digite sua comida preferida');

console.log(comidasPreferidas);
console.log(msg);

comidasPreferidas[1] = comidaPreferida;

console.log(comidasPreferidas);

//3.

let listaDeTarefas = [];
const tarefa1 = prompt('Digite a primeira tarefa'),
  tarefa2 = prompt('Digite a segunda tarefa'),
  tarefa3 = prompt('Digite a terceira tarefa');

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

console.log(listaDeTarefas);

const removerItem = +prompt('Digite o index de uma tarefa já realizada');

listaDeTarefas.splice(removerItem - 1, 1);

console.log(listaDeTarefas);
