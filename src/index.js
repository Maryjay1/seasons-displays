import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Lat: null, errorMessage:'' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      }
        err => {
            this.setState({errorMessage: err.message});
        }
    );
  }
  render() {
    return (
      <div>
        <h1>Latitude:{this.state.lat}<br />
        Error: {this.state.errorMessage}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
