import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
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
      <Container>
        <Header as="h1">Minimal Chat</Header>
        <Divider />
        <MessageFeed messages={messages} />
        <Divider />
        <MessageForm handleCreateMessage={this.handleCreateMessage} />
      </Container>
    );
  }
}

export default App;
