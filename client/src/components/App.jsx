import React, { Component } from 'react';
import { retrieveAllMessages, createMessage } from '../utils/api';
import MessageForm from './MessageForm/MessageForm';
import MessageFeed from './MessageFeed/MessageFeed';

class App extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    retrieveAllMessages().then((messages) =>
      this.setState({
        messages,
      })
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const [email, text] = event.target;

    createMessage({ email: email.value, text: text.value }).then((newMessage) =>
      this.setState((prevState) => ({
        messages: [...prevState.messages, newMessage],
      }))
    );
  };

  render() {
    const { messages } = this.state;
    return (
      <React.Fragment>
        <MessageFeed messages={messages} />
        <MessageForm onSubmit={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

export default App;
