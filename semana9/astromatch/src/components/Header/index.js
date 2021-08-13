import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [showList, setShowList] = React.useState(false);

  const changeRoute = () => setShowList(!showList);

  return (
    <header>
      <h1>astromatch</h1>

      <Link to={showList ? '/' : 'matchList'} onClick={changeRoute}>
        {showList ? 'Voltar' : 'Veja a lista'}
      </Link>
    </header>
  );
};
