require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messageRouter = require('./routes/messages');

const app = express();
const port = process.env.SERVER_PORT || 3001;

mongoose
  .connect(
    process.env.DB_CONNECTION_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Successfully connected to database`))
  .catch((error) => console.log(`Failed to connect to database, ${error}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/messages', messageRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Success! Listening on port ${port}`));
