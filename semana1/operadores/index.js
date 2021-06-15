/*
// Exercícios de interpretação de código

1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

	const bool1 = true
  const bool2 = false
  const bool3 = !bool2

  let resultado = bool1 && bool2
    console.log("a. ", resultado) // a. false

  resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) // b. false

  resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado) // c. true

  console.log("d. ", typeof resultado) // boolean

2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
 Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

  let primeiroNumero = prompt("Digite um numero!")
  let segundoNumero = prompt("Digite outro numero!")

  const soma = primeiroNumero + segundoNumero

  console.log(soma) // o prompt sempre retorna valores como String.
	Tendo isso em mente, a constante "soma" está "somando" duas strings, o que é inviavel em JS,
	sendo assim será impresso no console a concatenação das duas strings recebidas pelo prompt.

3. envolver cada prompt em um Number(prompt(......)) ou utilizar o "+" em cada "+prompt(......)"

*/

// Exercícios de escrita de código

//1
const idadeUsuario = Number(prompt('Digite a sua idade')),
  idadeMelhorAmigo = Number(prompt('Digite a idade do seu melhor amigo(a)')),
  idadeEMaior = idadeUsuario > idadeMelhorAmigo,
  idadeDiferença = idadeUsuario - idadeMelhorAmigo;

console.log('Sua idade é maior do que a do seu melhor amigo?', idadeEMaior);
console.log('Diferença de idade', idadeDiferença);

//2
const numeroPar = Number(prompt('Digite um numero par'));
console.log(numeroPar % 2); //Obs: os numeros pares sempre retornam o valor 0 se o usuario inserir um número ímpar, o valor retornado sempre será 1;

//3
const idadeUsuarioEmAnos = Number(prompt('Digite a sua idade em anos')),
  idadeEmMeses = idadeUsuarioEmAnos * 12,
  idadeEmDias = idadeUsuarioEmAnos * 365,
  idadeEmHoras = idadeUsuarioEmAnos * 8760;
console.log(idadeEmMeses, idadeEmDias, idadeEmHoras);

//4
const numeroUsuario = Number(prompt('Digite um numero')),
  numeroUsuario2 = Number(prompt('Digite outro numero')),
  resultado = `O primeiro numero é maior que segundo? ${
    numeroUsuario > numeroUsuario2
  }
 	O primeiro numero é igual ao segundo? ${numeroUsuario === numeroUsuario2}
 	O primeiro numero é divisível pelo segundo? ${
    numeroUsuario % numeroUsuario2 === 0
  }
 	O segundo numero é divisível pelo primeiro? ${
    numeroUsuario2 % numeroUsuario === 0
  }`;
console.log(resultado);
