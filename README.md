# Code Task - Minimal Chat App

**Epic/User Story to fulfill**

> As a user, I can add a new message: by entering my email in an input field and writing a message in another, after hitting the _send_ button,I'll be able to view my message in the chat feed.

## Get Started

First of all, you will need the following to get started:

- An internet connection, to install all of the dependencies & accessing stylesheet for semantic ui.
- [Node.js](https://nodejs.org/en/) - v.10.15.0
- [npm](https://www.npmjs.com/get-npm) - 6.4.1

When you are sure your local environment includes all of the above requirements, do this:

**Heads up!** All scripts should be run from the root of the project :smile:

1. **Create a `.env` file**. Copy the content of `.env-example`. Then replace the values with real ones.

2. **Install dependencies**.`npm run install:all`

3. Then, either:

- **Run the project in development mode**:

  - **Start up the server**. `npm run dev`

  - **Start the client**. Open up a new terminal tab or a new window (you get to decide :smile:).<br> It will use port [3000](http://localhost:3000). `npm run start:client`

- **To serve the built version of the front end**:

  - **Build the front end part.** `npm run build:client`

  - **Set environment variable**. Make sure the env-variable `NODE_ENV` is set to `production`, e.g. setting it in the `.env`-file.

  - **Start the project**. `npm run start`

## Formatting

Prettier - exists as a plugin for most popular code editors. There is a config file included in the root of the project, `.prettierrc`.
https://prettier.io/docs/en/editors.html

## Tech Stack

**Front End**

- React - [Create React App](https://github.com/facebook/create-react-app) was used to initialize the front end part of this project
- [SemanticUI React](https://react.semantic-ui.com/) - a React component library
- [date-fns](https://date-fns.org/) - a library to format dates

**Back End**

- Node.js
- Express - a framework for Node.js
- Mongoose - a object modeling framework for Node.js & MongoDb
- body-parser - for handling parsing of requests
- dotenv - for handling ENV variables in development
- nodemon - for hot-reloading in development

**Database**

- MongoDb - as a service, using mlab.com
