import React from 'react';
import { Feed } from 'semantic-ui-react';

const Message = ({ author, createdAt, text }) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        <span>{author}</span>
        <Feed.Date>{createdAt}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>{text}</Feed.Extra>
    </Feed.Content>
  </Feed.Event>
);

export default Message;
