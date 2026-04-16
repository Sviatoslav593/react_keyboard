import React from 'react';

type State = {
  keyPressed: string | null;
};

export class App extends React.Component<State> {
  state: State = {
    keyPressed: null,
  };

  handleKeyBoardKey = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyBoardKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyBoardKey);
  }

  render() {
    return (
      <div className="App">
        {this.state.keyPressed ? (
          <p className="App__message">
            The last pressed key is [{this.state.keyPressed}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
