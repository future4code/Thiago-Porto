import React from 'react';

import Input from '../Input';
import { FormWrapper } from '../style';

class Tela3 extends React.Component {
  render() {
    return (
      <FormWrapper>
        <h1>Etapa 3 - informações gerais de ensino</h1>
        <Input
          label={'5. Por que você não terminou um curso de graduação?'}
          type={'text'}
        />
        <label>6. Você fez algum curso complementar?</label>
        <select>
          <option value="Nenhum">Nenhum</option>
          <option value="Curso técnico">Curso técnico</option>
          <option value="Curso de inglês">Curso de inglês</option>
        </select>
      </FormWrapper>
    );
  }
}

export default Tela3;
