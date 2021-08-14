import React from 'react';
import axios from 'axios';

import Input from '../../Input';
import Button from '../../Button';

const { url, headers } = {
  url: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
  headers: {
    headers: {
      Authorization: 'thiago-santiago-lovelace',
    },
  },
};

export class SongsList extends React.Component {
  state = {
    showSongs: false,

    nameInputValue: '',
    artistInputValue: '',
    urlInputValue: '',

    songs: [],
  };

  onClickShowSongs = () => this.setState({ showSongs: !this.state.showSongs });

  onChangeInputName = ({ target }) =>
    this.setState({ nameInputValue: target.value });

  onChangeInputArtist = ({ target }) =>
    this.setState({ artistInputValue: target.value });

  onChangeInputUrl = ({ target }) =>
    this.setState({ urlInputValue: target.value });

  addTrack = async () => {
    this.setState({
      urlInputValue: '',
      nameInputValue: '',
      artistInputValue: '',
    });

    const { nameInputValue, artistInputValue, urlInputValue } = this.state;
    const { idSong } = this.props;

    const addTrackUrl = `${url}/${idSong}/tracks`;
    const body = {
      name: nameInputValue,
      artist: artistInputValue,
      url: urlInputValue,
    };
    await axios.post(addTrackUrl, body, headers);
  };

  componentDidMount = () => this.getAllTracks();

  getAllTracks = async () => {
    const { idSong } = this.props;
    const getTrackUrl = `${url}/${idSong}/tracks`;
    const {
      data: {
        result: { tracks },
      },
    } = await axios.get(getTrackUrl, headers);
    this.setState({ songs: tracks });
  };

  render() {
    const {
      showSongs,
      songs,
      nameInputValue,
      artistInputValue,
      urlInputValue,
    } = this.state;
    const showTracks = songs.map(({ id, name, artist }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{artist}</p>
      </li>
    ));

    return (
      <div>
        <Button
          name={!showSongs ? 'Ver musicas' : 'X'}
          type={'button'}
          event={this.onClickShowSongs}
        />
        {showSongs && (
          <>
            <Input
              type={'text'}
              placeholder={'nome da musica'}
              value={nameInputValue}
              event={this.onChangeInputName}
            />

            <Input
              type={'text'}
              placeholder={'nome do artista'}
              value={artistInputValue}
              event={this.onChangeInputArtist}
            />
            <Input
              type={'text'}
              placeholder={'url do audio'}
              value={urlInputValue}
              event={this.onChangeInputUrl}
            />
            <Button event={this.addTrack} type={'button'} name={'Add musica'} />
            {songs.length ? (
              <ol>{showTracks}</ol>
            ) : (
              "you don't have songs at the moment"
            )}
          </>
        )}
      </div>
    );
  }
}

export default SongsList;
