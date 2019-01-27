const express = require('express');
const messageRouter = express.Router();
const Message = require('../models/Message');

messageRouter.post('/', (req, res) => {
  const { author, text } = req.body;
  const newMessage = new Message({
    author,
    text,
  });

  newMessage
    .save()
    .then((message) =>
      res.status(201).json({
        data: message,
      })
    )
    .catch((error) =>
      res.status(500).json({
        errors: error,
      })
    );
});

module.exports = messageRouter;
