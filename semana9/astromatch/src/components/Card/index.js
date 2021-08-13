import React from 'react';
import axios from 'axios';

export const Card = () => {
  const [profile, setProfile] = React.useState({});

  const { id, age, name, bio, photo } = profile;

  const fetchData = async () => {
    const url =
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-santiago-lovelace/person';

    const {
      data: { profile: persona },
    } = await axios.get(url);
    setProfile(persona);
  };

  const choosePerson = async (bool) => {
    const { url, body, headers } = {
      url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-santiago-lovelace/choose-person',
      body: {
        id,
        choice: bool,
      },
      headers: {
        ContentType: 'application/json',
      },
    };

    await axios.post(url, body, { headers });

    fetchData();
  };

  const clearAll = async () => {
    const { url, headers } = {
      url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-santiago-lovelace/clear',
      headers: {
        ContentType: 'application/json',
      },
    };

    await axios.put(url, { headers });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <figure>
        <img src={photo} alt={name} />
      </figure>

      <div>
        <p>{`${name}, ${age}`}</p>
        <p>{bio}</p>
      </div>

      <button onClick={() => choosePerson(false)}>X</button>
      <button onClick={() => choosePerson(true)}>{'<3'}</button>
      <button onClick={clearAll}>Clear all swipe e matches</button>
    </>
  );
};
