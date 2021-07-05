```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const numeros = arrayDeNumeros.filter((num) => num === numeroEscolhido);

  if (numeros.length)
    return `O número ${numeroEscolhido} aparece ${numeros.length}x`;
  return 'Número não encontrado';
}
```
