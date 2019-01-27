import React from 'react';
import { Feed } from 'semantic-ui-react';
import Message from './Message';

const MessageFeed = ({ messages }) => (
  <Feed>
    {messages.map(({ _id: id, author, createdAt, text }) => (
      <Message key={id} author={author} text={text} createdAt={createdAt} />
    ))}
  </Feed>
);

export default MessageFeed;
