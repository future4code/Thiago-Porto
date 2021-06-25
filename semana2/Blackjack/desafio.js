let user = [];
let computador = [];

const iniciarNovaRodada = confirm(
  `Bem-vindo ao jogo de Blackjack!
Quer iniciar uma nova rodada?`
);

if (iniciarNovaRodada) {
  const armazenaCartas = () => {
    let cartasOk = false,
      iterarar2X = Array.from({ length: 2 });

    while (!cartasOk) {
      iterarar2X.forEach((_) => {
        user.push(comprarCarta());
        computador.push(comprarCarta());
      });

      const eAses =
        (user[0].valor === 11 && user[1].valor === 11) ||
        (computador[0].valor === 11 && computador[1].valor === 11);

      if (eAses) {
        user = [];
        computador = [];
      } else cartasOk = true;
    }
  };
  armazenaCartas();

  const mostrarCartaUserEPc = () => {
    let comprando = false;

    while (!comprando) {
      let textos = '',
        pontos = 0;
      user.forEach(({ texto, valor }) => {
        textos += texto;
        pontos += valor;
      });

      const pontosMaiorque21 = pontos > 21;
      if (pontosMaiorque21) comprando = true;
      else {
        const confirmaCompra = confirm(
          `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}. 'Deseja comprar mais uma carta?`
        );

        if (confirmaCompra) user.push(comprarCarta());
        else comprando = true;
      }
    }
  };
  mostrarCartaUserEPc();

  let pontosUser = 0,
    pontosComputador = 0,
    textosComputador = '',
    textosUser = '';

  function addValor(arr, userOuPc) {
    if (userOuPc.toLowerCase() === 'user') {
      arr.forEach(({ texto, valor }) => {
        textosUser += texto;
        pontosUser += valor;
      });
    } else {
      arr.forEach(({ texto, valor }) => {
        textosComputador += texto;
        pontosComputador += valor;
      });
    }
  }

  const calculaPontosUserEPc = () => {
    addValor(computador, 'pc');
    addValor(user, 'user');
  };
  calculaPontosUserEPc();

  const compraCartasPc = () => {
    const pontosMenorQue21 = pontosUser <= 21;
    if (pontosMenorQue21) {
      while (pontosComputador < pontosUser && pontosComputador <= 21) {
        computador.push(comprarCarta());
        pontosComputador = 0;
        textosComputador = '';
        addValor(computador, 'pc');
      }
    }
  };
  compraCartasPc();

  let resultado = '';

  const verificaGanhador = () => {
    const userMaiorQuePcEUserMenorQue21 =
      pontosUser > pontosComputador && pontosUser <= 21;

    if (userMaiorQuePcEUserMenorQue21) resultado = 'O usuário ganhou!';
    else if (pontosComputador > pontosUser && pontosComputador <= 21)
      resultado = 'O computador ganhou!';
    else if (pontosComputador > 21 && pontosUser <= 21)
      resultado = 'O usuário ganhou!';
    else if (pontosUser > 21 && pontosComputador <= 21)
      resultado = 'O computador ganhou!';
    else resultado = 'Empate!';
  };
  verificaGanhador();

  alert(
    `Usuario - Cartas: ${textosUser} - Pontuação: ${pontosUser}
    Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}
    ${resultado}`
  );
} else {
  alert('O jogo acabou.');
}
