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

  handleCreateMessage = (message) => {
    createMessage(message).then((newMessage) =>
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
        <MessageForm handleCreateMessage={this.handleCreateMessage} />
      </React.Fragment>
    );
  }
}

export default App;
