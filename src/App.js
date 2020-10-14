import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  componentDidMount() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    })
    .then((response) => response.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  }
  render() {
    return (
      <section>
        <h1>I am here as a place holder fam</h1>
      </section>
    );
  }
}

export default App;
