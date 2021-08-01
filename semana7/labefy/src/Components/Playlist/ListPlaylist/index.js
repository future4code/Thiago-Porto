import React from 'react';
import axios from 'axios';

import SongsList from '../SongsList';
import Button from '../../Button';

const { url, headers } = {
  url: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
  headers: {
    headers: {
      Authorization: 'thiago-santiago-lovelace',
    },
  },
};

export class ListPlaylist extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount = () => this.getAllPlaylists();

  getAllPlaylists = async () => {
    const {
      data: {
        result: { list },
      },
    } = await axios.get(url, headers);
    this.setState({ playlists: list });
    this.componentDidMount();
  };

  deletePlaylist = async (id) => {
    const deleteUrl = `${url}/${id}`;
    await axios.delete(deleteUrl, headers);
    this.getAllPlaylists();
  };

  render() {
    const { playlists } = this.state;
    const showPlaylist = ({ id, name }) => (
      <div key={id}>
        <li>
          {name}
          <Button
            name={'X'}
            type={'button'}
            event={() => this.deletePlaylist(id)}
          />
        </li>
        <section>
          <SongsList idSong={id} />
        </section>
      </div>
    );
    const showPlaylistMap = playlists.map(showPlaylist);
    return (
      <section>
        <h2>Your playlists</h2>
        {!playlists.length ? (
          <p>you don't have playlists at the moment</p>
        ) : (
          <ul>{showPlaylistMap}</ul>
        )}
      </section>
    );
  }
}

export default ListPlaylist;
