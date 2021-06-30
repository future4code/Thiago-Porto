// EXERCÍCIO 01
function inverteArray(array) {
  const reverseArray = array.reduceRight((acc, item) => {
    acc.push(item);
    return acc
  }, []);
  return reverseArray;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const evenNumberTwo = array.filter((num) => num % 2 === 0).map((num) => num**2);
  return evenNumberTwo;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const evenNumbers = array.filter((num) => num % 2 === 0);
  return evenNumbers;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const higherNumber = Math.max(...array);
  return higherNumber;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const numOfElements = array.length;
  return numOfElements;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2 ;
  const booleano4 = !booleano3;

  const bool1 = booleano1 && booleano2 && !booleano4;
  const bool2 = (booleano1 && booleano2) || !booleano3;
  const bool3 = (booleano2 || booleano3) && (booleano4 || booleano1);
  const bool4 = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  const bool5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3);

  const result = [bool1, bool2, bool3, bool4, bool5];

  return result;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const evenNumbers = [];
   let even = 0;
   let i = 0;
   while(i < n){
     i++;
     evenNumbers.push(even);
     even += 2;
   }
   return evenNumbers;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a ===b && a === c) return 'Equilátero';
  if ((a === b && b !== c) || (a !== b && b === c)) return 'Isósceles';
  if (a !== b && a !== c && b !== c) return 'Escaleno';
  return null;
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let bigger;
  let smaller;
   if(num1 > num2){
      bigger = num1;
      smaller = num2;
   }
   if(num2 > num1){
      bigger = num2;
      smaller = num1;
   }

   const majorDivisibleByMinor = bigger % smaller === 0;
   const difference = bigger - smaller;
   
   return {
    maiorNumero: bigger,
    maiorDivisivelporMenor: majorDivisibleByMinor,
    diferenca: difference,
  };
};

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let size = array.length;
   for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
   
  return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
