import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://thiaagosant.github.io/Portfolio/assets/img/ft-perfil.jpg"
          nome="Thiago"
          descricao="Olá, eu sou o Thiago. Sou aluno da Labenu(Lovelace). Tenho 18 anos e sou apaixonado por programação!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno icone={faEnvelope} tipo="Email" texto="abc@gmail.com" />
        <CardPequeno icone={faMapMarkerAlt} tipo="Endereço" texto="Rua São João" />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://lirp.cdn-website.com/e6774bbb/dms3rep/multi/opt/logo+logo-231w.png"
          nome="Amorim Transportes"
          descricao="Estagiario de RH e Fianceiro"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
