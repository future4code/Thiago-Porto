import React from 'react';

import Input from '../Input';
import { FormWrapper } from '../style';

class Tela2 extends React.Component {
  render() {
    return (
      <FormWrapper>
        <h1>Etapa 2 - informações do ensino superior</h1>
        <Input label={'5. Qual curso?'} type={'text'} />
        <Input label={'6. Qual a unidade de ensino?'} type={'text'} />
      </FormWrapper>
    );
  }
}

export default Tela2;
