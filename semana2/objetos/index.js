//Exercícios de interpretação de código

//1.

// const filme = {
//   nome: 'Auto da Compadecida',
//   ano: 2000,
//   elenco: [
//     'Matheus Nachtergaele',
//     'Selton Mello',
//     'Denise Fraga',
//     'Virginia Cavendish',
//   ],
//   transmissoesHoje: [
//     { canal: 'Telecine', horario: '21h' },
//     { canal: 'Canal Brasil', horario: '19h' },
//     { canal: 'Globo', horario: '14h' },
//   ],
// };

//a)
// console.log(filme.elenco[0]) // 'Matheus Nachtergaele',
// console.log(filme.elenco[filme.elenco.length - 1]); // 'Virginia Cavendish'
// console.log(filme.transmissoesHoje[2]); // { canal: 'Globo', horario: '14h' }

//2.

// const cachorro = {
//   nome: 'Juca',
//   idade: 3,
//   raca: 'SRD',
// };

// const gato = { ...cachorro, nome: 'Juba' };

// const tartaruga = { ...gato, nome: gato.nome.replaceAll('a', 'o') };

//a)

// console.log(cachorro); // {nome: 'Juca',idade: 3,raca: 'SRD',}
// console.log(gato); // {nome: "Juba",idade: 3,raca: "SRD"}
// console.log(tartaruga); // {nome: "Jubo",idade: 3,raca: "SRD"}

//b) pread irá distribuir um item iterável, um por um.

//3.

// function minhaFuncao(objeto, propriedade) {
//   return objeto[propriedade];
// }

// const pessoa = {
//   nome: 'Caio',
//   idade: 23,
//   backender: false,
// };

//a)

// console.log(minhaFuncao(pessoa, 'backender')); // false
// console.log(minhaFuncao(pessoa, 'altura')); // undefined

//Exercícios de escrita de código

//1.

const pessoa = {
  nome: 'Amanda',
  apelidos: ['Amandinha', 'Mandinha', 'Mandi'],
};

const minhaFuncao = (objeto) => {
  const resultado = `"Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}"`;

  return resultado;
};

console.log(minhaFuncao(pessoa));

const novoObjeto = {
  ...pessoa,
  apelidos: ['Guilherme', 'Gui', 'Guime'],
};

console.log(minhaFuncao(novoObjeto));

//2.

const objeto1 = {
  nome: 'Thiago',
  idade: 18,
  profissao: 'Desempregado',
};

const objeto2 = {
  nome: 'Gabriel',
  idade: 17,
  profissao: 'Mecanico',
};

const minhaFuncao2 = ({ nome, idade, profissao }) => {
  const arr = [nome, nome.length, idade, profissao, profissao.length];
  return arr;
};

console.log(minhaFuncao2(objeto1));
console.log(minhaFuncao2(objeto2));

//3.

const carrinho = [];

const fruta1 = {
  nome: 'Maçã',
  disponibilidade: true,
};

const fruta2 = {
  nome: 'Laranja',
  disponibilidade: true,
};

const fruta3 = {
  nome: 'Melancia',
  disponibilidade: false,
};

const minhaFuncao3 = (obj1, obj2, obj3) => {
  carrinho.push(obj1, obj2, obj3);
  console.log(carrinho);
}

minhaFuncao3(fruta1, fruta2, fruta3);