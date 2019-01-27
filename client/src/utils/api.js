export const createMessage = ({ email, text }) => {
  const message = {
    author: email,
    text,
  };

  return fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
    .then((response) => response.json())
    .then(({ data }) => data);
};

export const retrieveAllMessages = () => {
  return fetch('/api/messages')
    .then((response) => response.json())
    .then(({ data }) => data);
};
