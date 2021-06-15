//Exercícios de interpretação de código

/*

1.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) // 10 5

2.

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c) // 10 10 10

3.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

R:let horasTabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
	let valorRecebidoPorDia = prompt("Quanto você recebe por dia?")
	alert(`Voce recebe ${t/p} por hora`)
*/

// Exercícios de escrita de código

//1.

let nome, idade;

console.log(typeof nome, typeof idade);

//O tipo "undefined" foi impresso porque não foram atribuidos valores as variaveis "nome" e "idade"

nome = prompt('Digite seu nome:');
idade = prompt('Digite sua idade:');

console.log(typeof nome, typeof idade);

// Notei que os valorem retornados pelo prompt sempre serão Strings;

console.log(`Olá ${nome}, você tem ${idade} anos`);

//2.

const pergunta1 = 'Você é homem?',
  pergunta2 = 'Você é maior de idade?',
  pergunta3 = 'Você possui reservista?',
  resposta1 = prompt(pergunta1),
  resposta2 = prompt(pergunta2),
  resposta3 = prompt(pergunta3),
  resultado = `${pergunta1} - ${resposta1}
	  ${pergunta2} - ${resposta2}
	  ${pergunta3} - ${resposta3}
	`;
console.log(resultado);

//3.

let a = 10,
  b = 25;

// Aqui faremos uma lógica para trocar os valores
let c = a;
a = b;
b = c;
// Depois de trocados, teremos o seguinte resultado:
console.log('O novo valor de a é', a); // O novo valor de a é 25
console.log('O novo valor de b é', b); // O novo valor de b é 10
