import React from 'react';

import Playlist from '../Playlist';

export class Labefy extends React.Component {
  state = {
    initialPage: true,
  };

  changePage = () => this.setState({ initialPage: !this.state.initialPage });

  render() {
    return (
      <section>
        {this.state.initialPage && (
          <>
            <button type="button" onClick={this.changePage}>
              Click here and start listen your favorites songs
            </button>
          </>
        )}
        {!this.state.initialPage && <Playlist />}
      </section>
    );
  }
}

export default Labefy;
