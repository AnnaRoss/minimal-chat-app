import React from 'react';
import { Form } from 'semantic-ui-react';

const MessageForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Input
      required
      type="email"
      name="email"
      label="Email"
      placeholder="Enter your email"
    />
    <Form.TextArea
      autoHeight
      required
      name="text"
      label="Message"
      placeholder="Write your message here"
    />
    <Form.Button content="Send" />
  </Form>
);

export default MessageForm;
