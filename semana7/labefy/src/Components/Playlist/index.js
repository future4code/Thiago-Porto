import React from 'react';
import axios from 'axios';

import ListPlaylist from './ListPlaylist';
import Input from '../Input';
import Button from '../Button';

export class Playlist extends React.Component {
  state = {
    playlistInputValue: '',
  };

  onChangeInputPlaylist = ({ target }) =>
    this.setState({ playlistInputValue: target.value });

  createPlayList = async () => {
    this.setState({ playlistInputValue: '' });
    const playlistName = this.state.playlistInputValue;
    const { url, body, headers } = {
      url: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      body: {
        name: playlistName,
      },
      headers: {
        headers: {
          Authorization: 'thiago-santiago-lovelace',
        },
      },
    };
    await axios.post(url, body, headers);
  };

  render() {
    return (
      <section>
        <Input
          type={'text'}
          placeholder={'type your playlist name'}
          value={this.state.playlistInputValue}
          event={this.onChangeInputPlaylist}
        />
        <Button type={'button'} name={'+'} event={this.createPlayList} />
        <ListPlaylist />
      </section>
    );
  }
}

export default Playlist;
