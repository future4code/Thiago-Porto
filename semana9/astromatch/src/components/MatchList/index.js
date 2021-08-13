import React from 'react';
import axios from 'axios';

export const MatchList = () => {
  const [allMatches, setAllMatches] = React.useState([]);

  const getAllMatches = async () => {
    const url =
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-santiago-lovelace/matches';

    const {
      data: { matches: list },
    } = await axios.get(url);

    setAllMatches(list);
  };

  const renderAllMatches = allMatches.map(({ id, name, photo }) => (
    <li key={id}>
      <img src={photo} alt={name} />
      <p>{name}</p>
    </li>
  ));

  React.useEffect(() => getAllMatches(), []);

  return (
    <div>
      <ul>{renderAllMatches}</ul>
    </div>
  );
};
