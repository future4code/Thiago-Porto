console.log('Boas vindas ao jogo de Blackjack!');

const iniciarRodada = confirm('Quer iniciar uma nova rodada?');

if (!iniciarRodada) console.log('O jogo acabou');
else {
  const carta1Usuario = comprarCarta(),
    carta2Usuario = comprarCarta(),
    carta1Pc = comprarCarta(),
    carta2Pc = comprarCarta();

  const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor,
    pontuacaoPc = carta1Pc.valor + carta2Pc.valor;

  console.log(
    `Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}
  Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`
  );

  if (pontuacaoUsuario > pontuacaoPc) console.log('O usuário ganhou!');
  else if (pontuacaoUsuario < pontuacaoPc) console.log('O computador ganhou!');
  else console.log('Empate!');
}
