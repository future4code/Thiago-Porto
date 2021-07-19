import React from 'react';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import FimTela from './FimTela';
import Button from './Button';

import { PergutasWrapper } from './style';

class Perguntas extends React.Component {
  state = {
    page: 1,
  };

  nextPage = () =>
    this.setState({
      page:
        this.state.page <= 1 || this.state.page <= 3
          ? this.state.page + 1
          : this.state.page,
    });

  render() {
    const page = this.state.page;

    return (
      <PergutasWrapper>
        {page === 1 && <Tela1 />}
        {page === 2 && <Tela2 />}
        {page === 3 && <Tela3 />}
        {page === 4 && <FimTela />}

        {page === 4 ? (
          ''
        ) : (
          <Button event={this.nextPage} texto={'Proxima página'} />
        )}
      </PergutasWrapper>
    );
  }
}

export default Perguntas;
