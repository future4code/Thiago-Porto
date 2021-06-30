```js
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 const comissao = qtdeCarrosVendidos * 100 + (valorTotalVendas-(valorTotalVendas*0.95));
 const salarioFinal = comissao + 2000;
 
 return salarioFinal;
}
```