// Exercícios de interpretação de código

//1.

/*

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50


b) Não apareceria nada no console

//2.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) A função recebe um texto e verifica se no texto esta incluso a palavra cenoura retornando true ou false caso contenha ou não.

b) Eu gosto de cenoura // true
   CENOURA é bom pra vista // true
   Cenouras crescem na terra // false
*/

//Exercícios de escrita de código

//1.

const imprimeMsg = () => {
  console.log(
    'Eu sou Thiago, tenho 18 anos, moro em São Paulo e sou estudante.'
  );
};

const imprimeMsg2 = (nome, idade, cidade, profissao) =>
  `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;

//2.

const somaDoisNumeros = (num1, num2) => num1 + num2;
console.log(somaDoisNumeros(1, 3));

const maiorQueSegundo = (num1, num2) => num1 >= num2;
console.log(maiorQueSegundo(1, 3));

const ePar = (num) => num % 2 === 0;

const lengthECaixaAlta = (texto) => {
  const tamanhoTexto = texto.length,
    fraseEmCaixaAlta = texto.toUpperCase();
  return console.log(tamanhoTexto, fraseEmCaixaAlta);
};

console.log(lengthECaixaAlta('texto'));

const subtracao = (num1, num2) => num1 - num2,
  multiplicacao = (num1, num2) => num1 * num2,
  divisao = (num1, num2) => num1 / num2,
  numero1Usuario = +prompt('Digite o primeiro numero'),
  numero2Usuario = +prompt('Digite o segundo numero');

const somaUsuario = somaDoisNumeros(numero1Usuario, numero2Usuario),
  subtracaoUsuario = subtracao(numero1Usuario, numero2Usuario),
  multiplicacaoUsuario = multiplicacao(numero1Usuario, numero2Usuario),
  divisaoUsuario = divisao(numero1Usuario, numero2Usuario),
  resultado = `
  Números inseridos: ${numero1Usuario} e ${numero2Usuario}
  Soma: ${somaDoisNumeros(numero1Usuario, numero2Usuario)}
  Diferença: ${subtracaoUsuario}
  Multiplicação: ${multiplicacaoUsuario}
  Divisão: ${divisaoUsuario}`;

console.log(resultado);
