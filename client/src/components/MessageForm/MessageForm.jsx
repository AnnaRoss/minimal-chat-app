import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class MessageForm extends Component {
  state = {
    email: '',
    text: '',
  };

  handleChange = (_event, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { handleCreateMessage } = this.props;
    handleCreateMessage(this.state);
    this.setState({ email: '', text: '' });
  };

  render() {
    const { email, text } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.TextArea
          autoHeight
          required
          name="text"
          label="Message"
          placeholder="Write your message here"
          value={text}
          onChange={this.handleChange}
        />
        <Form.Button content="Send" />
      </Form>
    );
  }
}

export default MessageForm;
