# Code Task - Minimal Chat App

**Epic/User Story to fulfill**

> As a user, I can add a new message: by entering my email in an input field and writing a message in another, after hitting the _send_ button,I'll be able to view my message in the chat feed.

## Get Started

First of all, you will need the following to get started:

- An internet connection, to install all of the dependencies
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

When you are sure your local environment includes all of the above requirements, do this:

1. **Install dependencies**. Run this command in the terminal from the root of the project.

   ```bash
   npm run install:all
   ```

2. **Start up the server**. Run this command in the terminal from the root of the project.

   ```bash
   npm run start
   ```

3. **Start the client**. Open up a new terminal tab or a new window (you get to decide :smile:).<br> Run following, it will use port [3000](http://localhost:3000):
   ```bash
   npm run start:client
   ```

### Formatting

https://prettier.io/docs/en/editors.html

## Tech Stack

**Front End**

- React - [Create React App](https://github.com/facebook/create-react-app) was used to initialize the front end part of this project
- [SemanticUI React](https://react.semantic-ui.com/) - a React component library
- [date-fns](https://date-fns.org/) - a library to format dates
  **Back End**

- Node
- Express - a framework for Node.js
- Mongoose - a object modeling framework for Node.js & MongoDb
- body-parser - for handling parsing of requests
- dotenv - for handling ENV variables in development

**Database**

- MongoDb - as a service, using mlab.com
