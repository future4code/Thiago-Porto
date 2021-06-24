// Exercícios de interpretação de código

// 1.
// R: um loop, enquanto valor for menor que 5 o valor da variavel é incrementado "+=" ao valor de i. imprime no console: 5

// 2.

// a)
// R: 19 21 23 25 27 30

// b)
// R: sim, usando o metodo entries()

// 3.
// R: ****

// Exercícios de escrita de código

// 1.

const qtdBichinhos = +prompt('Quantos bichinhos de estimação você tem?');

const arrayBichinhos = (qtdBichinhos) => {
  const bichinhosIgualAZero = qtdBichinhos <= 0;

  const naoTemBichinhos = () =>
    console.log('Que pena! Você pode adotar um pet!');

  const temBichinhos = () => {
    const arrNomePets = [];

    for (let i = 0; i < qtdBichinhos; i++) {
      const nomePets = prompt('Digite o nome de cada pet por vez');
      arrNomePets.push(nomePets);
    }
    console.log(arrNomePets);
  };

  const init = () => {
    if (bichinhosIgualAZero) return naoTemBichinhos();
    else return temBichinhos();
  };

  return init();
};

arrayBichinhos(qtdBichinhos);
// 2.

const mostraValores = (arr) => arr.forEach((valor) => console.log(valor));

const dividoPor10 = (arr) => arr.forEach((valor) => console.log(valor / 10));

const parImpar = (arr) => arr.filter((valor) => valor % 2 === 0);

const indexENumero = (arr) =>
  arr.map((valor, index) => `O elemento do índex ${index} é ${valor}`);

const maiorEMenor = (arr) =>
  console.log(
    `O maior numero é ${Math.max(...arr)} e o menor é ${Math.min(...arr)}`
  );
