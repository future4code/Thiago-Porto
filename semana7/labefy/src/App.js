import React from 'react';
import Wellcome from './Components/Wellcome';
import Input from './Components/Input';
class App extends React.Component {
  state = {
    initialPage: true,
    playlistInputValue: '',
  };

  changePage = () => this.setState({ initialPage: !this.state.initialPage });

  onChangeInputPlaylist = ({ target }) =>
    this.setState({ playlistInputValue: target.value });

  render() {
    return (
      <main>
        {this.state.initialPage && (
          <>
            <Wellcome />
            <button type="button" onClick={this.changePage}>
              Click here and start listen your favorites songs
            </button>
          </>
        )}

        {!this.state.initialPage && (
          <Input
            type={'text'}
            placeholder={'Digite o nome da sua playlist'}
            value={this.state.playlistInputValue}
            event={this.onChangeInputPlaylist}
          />
        )}
      </main>
    );
  }
}

export default App;
