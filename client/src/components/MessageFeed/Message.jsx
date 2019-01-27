import React from 'react';
import { Feed } from 'semantic-ui-react';
import distanceInWords from 'date-fns/distance_in_words';

const Message = ({ author, createdAt, text }) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        <span>{author}</span>
        <Feed.Date>
          {distanceInWords(new Date(), createdAt, { addSuffix: true })}
        </Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>{text}</Feed.Extra>
    </Feed.Content>
  </Feed.Event>
);

export default Message;
