import React from 'react';

import Input from '../Input';
import { FormWrapper } from '../style';

class Tela1 extends React.Component {
  render() {
    return (
      <FormWrapper>
        <h1>Etapa 1 - dados gerais</h1>
        <Input label={'1. Qual o seu nome?'} type={'text'} />
        <Input label={'2. Qual a sua idade?'} type={'text'} />
        <Input label={'3. Qual seu email?'} type={'email'} />
        <label>4. Qual a sua escolaridade?</label>
        <select>
          <option value="Ensino médio incompleto">
            Ensino médio incompleto
          </option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">
            Ensino superior incompleto
          </option>
          <option value="Ensino superior completo">
            Ensino superior completo
          </option>
        </select>
      </FormWrapper>
    );
  }
}

export default Tela1;
