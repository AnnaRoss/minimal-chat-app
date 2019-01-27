import { Component } from 'react';
import { retrieveAllMessages } from '../utils/api';

class App extends Component {
  componentDidMount() {
    retrieveAllMessages().then(console.log);
  }

  render() {
    return null;
  }
}

export default App;
