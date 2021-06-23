// Exercícios de interpretação de código

// 1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Recebe um numero digitado pelo usuario,
// transforma o numero digitado em Number, e verifica se o numero digitado é divisivel por 2,
// se "TRUE", o codigo printa uma menssagem na tela: "Passou no teste." senão, printa: "Não passou no teste."

// b) 2, 4, 6, 8, 10.

// c) 1, 3, 5, 7, 9

// 2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }

// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

// a) Para que serve o código acima?
// R: Definir o preço da fruta que o usuario escolher

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// R: O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// R: 5

// 3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// R: executando um prompt pedindo para o usuario digitar o primeiro numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R: "Esse número passou no teste". Nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R: Sim, pois o console está tentando acessar uma variavel fora do seu escopo, a variavel só pode ser acessada dentro do escopo do if.

// Exercícios de escrita de código

// 1.

const idade = +prompt('digite sua idade');

idade >= 18
  ? console.log('Você pode dirigir')
  : console.log('Você não pode dirigir');

// 2.

const periodo = prompt(
  'Em que turno você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno)'
);

if (periodo === 'M') console.log('Bom dia!');
else if (periodo === 'V') console.log('Boa Tarde!');
else console.log('Boa noite!');

// 3.

switch (periodo) {
  case 'M':
    console.log('Bom dia!');
    break;
  case 'V':
    console.log('Boa Tarde!');
    break;
  case 'N':
    console.log('Boa noite!');
    break;
  default:
    break;
}

// 4.

const generoDeFilme = prompt('Qual o gênero de filme que vão assistir?'),
  preçoDoIngresso = +prompt('Qual o preço do ingresso?'),
  vaiAoCinema =
    generoDeFilme.toLowerCase() === 'fantasia' && preçoDoIngresso < 15;

vaiAoCinema ? console.log('Bom filme!') : console.log('Escolha outro filme :(');
