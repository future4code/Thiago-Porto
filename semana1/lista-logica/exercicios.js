// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!');

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = +prompt('Digite a altura do retangulo'),
    largura = +prompt('Digite a largura do retangulo');

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +prompt('Digite o ano atual'),
    anoNascimento = +prompt('Digite o seu ano de nascimento');

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / altura ** 2;
  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome'),
    idade = +prompt('Digite sua idade'),
    email = prompt('Digite seu email'),
    msg = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`;

  console.log(msg);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite a primeira cor'),
    cor2 = prompt('Digite a segunda cor'),
    cor3 = prompt('Digite a terceira cor'),
    arr = [cor1, cor2, cor3];

  console.log(arr);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const emCaixaAlta = string.toUpperCase();

  return emCaixaAlta;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingresssosParaVender = custo / valorIngresso;

  return ingresssosParaVender;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const possuiMesmoTamanho = string1.length === string2.length;

  return possuiMesmoTamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];

  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length - 1];

  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array.shift(),
    ultimoElemento = array.pop();

  array.unshift(ultimoElemento);
  array.push(primeiroElemento);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stringsTratadas = {
      str1: string1.toLowerCase(),
      str2: string2.toLowerCase(),
    },
    resultado = stringsTratadas.str1 === stringsTratadas.str2;

  return resultado;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = +prompt('Digite o ano atual'),
    anoNascimento = +prompt('Digite o seu ano de nascimento'),
    anoCarteira = +prompt(
      'Digite o ano em que sua carteira de identidade foi emitida'
    ),
    idade = anoAtual - anoNascimento,
    precisaRenovar = anoAtual - anoCarteira,
    ate20 = idade <= 20 && precisaRenovar >= 5,
    de20a50 = idade > 20 && idade <= 50 && precisaRenovar >= 10,
    acima50 = idade > 50 && precisaRenovar >= 15;

  if (ate20 || de20a50 || acima50) console.log(true);
  else console.log(false);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 == 0) return true;
  else if (ano % 4 == 0 && ano % 100 != 0) return true;
  else return false;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt('Você tem mais de 18 anos?'),
    ensinoMedio = prompt('Você possui ensino médio completo?'),
    disponibilidade = prompt(
      'Você possui disponibilidade exclusiva durante os horários do curso?'
    ),
    podeEstudarLabenu =
      maiorDeIdade === 'sim' &&
      ensinoMedio === 'sim' &&
      disponibilidade === 'sim';

  console.log(podeEstudarLabenu);
}
