import React, { Component } from 'react';
import { Feed, Container } from 'semantic-ui-react';
import Message from './Message';

class MessageFeed extends Component {
  componentDidMount() {
    this.scrollToBottomOfFeed();
  }

  componentDidUpdate() {
    this.scrollToBottomOfFeed();
  }

  scrollToBottomOfFeed() {
    this.feedAnchor.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messages } = this.props;
    return (
      <Container className="message-feed">
        <Feed>
          {messages.map(({ _id: id, author, createdAt, text }) => (
            <Message
              key={id}
              author={author}
              text={text}
              createdAt={createdAt}
            />
          ))}
        </Feed>
        <div ref={(nodeRef) => (this.feedAnchor = nodeRef)} />
      </Container>
    );
  }
}

export default MessageFeed;
