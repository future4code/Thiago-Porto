// Exercícios de interpretação de código

// 1.

// a) cada item, o index de cada item, e array da iteração

// 2.

// a) os nomes da variavel usuario

//3

// b) mandi e laura

// Exercícios de escrita de código

// 1.

const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' },
];

// a)
const nomesDogsArray = pets.map(({ nome }) => nome);

// b)
const caoSalsicha = pets.filter(
  ({ raca }) => raca.toLowerCase() === 'salsicha'
);

// c)
const descontoPoodle = pets
  .filter(({ raca }) => raca === 'Poodle')
  .map(
    ({ nome }) =>
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}`
  );

// 2.

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 },
];

// a)
const nomesProdutosArray = produtos.map(({ nome }) => nome);

// b)
const nomeEPreco = produtos.map(({ nome, preco }) => {
  const precoFinal = +(preco - preco * 0.05).toFixed(2);
  return {
    nome,
    preço: precoFinal,
  };
});

// c)
const bebidas = produtos.filter(
  ({ categoria }) => categoria.toLowerCase() === 'bebidas'
);

// d)
const ype = produtos.filter(({ nome }) => nome.toLowerCase().includes('ypê'));

//e)
const compreNomeEPrecoYpe = produtos
  .filter(({ nome }) => nome.toLowerCase().includes('ypê'))
  .map(({ nome, preco }) => `Compre ${nome} por R$${preco}`);

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama' },
  { nome: 'Bellsprout', tipo: 'grama' },
  { nome: 'Charmander', tipo: 'fogo' },
  { nome: 'Vulpix', tipo: 'fogo' },
  { nome: 'Squirtle', tipo: 'água' },
  { nome: 'Psyduck', tipo: 'água' },
];

// Desafio

// a)
const ordemAlfabetica = pokemons.reduce((acc, { nome }) => {
  acc.push(nome);
  return acc.sort();
}, []);

// b)
const semRepetir = pokemons.reduce((acc, { tipo }) => {
  acc.push(tipo);
  const semRepeticao = [...new Set(acc)];
  return semRepeticao;
}, []);
