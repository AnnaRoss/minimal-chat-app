import React, { Component } from 'react';
import { retrieveAllMessages, createMessage } from '../utils/api';
import MessageForm from './MessageForm/MessageForm';

class App extends Component {
  componentDidMount() {
    retrieveAllMessages().then(console.log);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const [email, text] = event.target;
    createMessage({ email: email.value, text: text.value }).then(console.log);
  };

  render() {
    return <MessageForm onSubmit={this.handleSubmit} />;
  }
}

export default App;
