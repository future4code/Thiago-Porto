import React from 'react';
import axios from 'axios';
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
  };

  deletePlaylist = async (id) => {
    const deleteUrl = `${url}/${id}`;
    await axios.delete(deleteUrl, headers);
    this.getAllPlaylists();
  };

  render() {
    const showPlaylist = ({ id, name }) => (
      <li key={id}>
        {name}{' '}
        <Button
          name={'X'}
          type={'button'}
          event={() => this.deletePlaylist(id)}
        />{' '}
      </li>
    );
    const showPlaylistMap = this.state.playlists.map(showPlaylist);
    // const { playlists } = this.state;
    return (
      <section>
        <h2>Your playlists</h2>
        {!this.state.playlists.length ? (
          <p>you don't have playlists at the moment</p>
        ) : (
          <ul>{showPlaylistMap}</ul>
        )}
      </section>
    );
  }
}

export default ListPlaylist;
