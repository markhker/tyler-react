# Tyler React
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The game consists in a square matrix of square tiles that will be all of the same color except for one.

## Installation
___
You must have installed node.js V10.4.1 and yarn
1. Download or clone the repo
2. Go to the project directory in your terminal
3. Run `yarn` command to install dependencies of the project
4. Run `yarn dev` script to actually run the developemnt server
5. Go to http://localhost:3000/ in your blrowser to view the project

To use with your firebase project use the sample devExample.js file configuration in src/config directory and provide your auth information to it, then change the name of the file to dev.js.

If you want to upload the project to a server, you have to provide in a prod.js file the same information via environment variables.

## How to use?
___
You can deploy the project to a server by running `yarn build` in the project directory and upload the produced `dist` directory.

You must have to provide the environment variables defined in the `src/config/prod.js` file containing your apikey and urls to connect with a firebase project, in order to make the leaderboard functional.

## Built With
___
[React.js](https://reactjs.org/)
Because of the reusable components, fast render and great developer tools.

[Redux](https://redux.js.org/)
Because it's a predictable state container for my application, it solves the "state transfer problem" thas react have. All components can access this central store.

[Redux-Saga](https://redux-saga.js.org/)
Redux Saga is used for organize side effects in my app, I can create all the logic of event stream processing in a single saga. Unlike thunks that are carried out when you dispatch them, sagas run in the background right after the app is launched. Sagas observe all actions that the store dispatches and decide what to do with them.

I can define three principal benefits of using sagas:
* Simplicity in organiziting difficult side effects sequences
* Declarative style
* Simplicity of testing

[Redux Toolbelt](https://github.com/welldone-software/redux-toolbelt)
While having many advantages, redux can be frustrating and verbose. The toolbelt is meant to make my code smaller and better.

I have achieved up to 80% code reduction and made the code much more readable and clear. Obviously, development time and bugs dropped significantly as well.
Redux toolbelt attaches metadata to the action creator. This data that includes type information and all the related sub action creators (success, failure etc). The result is a self contained encapsulation of all that is needed to execute and handle the flow of an asynchronous action.

[Material UI](https://material-ui.com/)
Material Design can give you guidelines to make better, more tactile user interfaces. It can inspire your designers to think about the hierarchy of information. I have to build this app faster so write my own css library was not an option. This library is easy to use and has a nice feel, plus is writen in react, so the integration with my project was very easy.

[Firebase](https://firebase.google.com/?hl=es-419)
The entire database is backed by a real-time connection to the back end. I don’t have to constantly poll the server or build pull-to-refresh controls into my app, Additionally there is a redux-saga-firebase library that allows me to easily connect and use the firebase SDK with my app.

Since the Firebase database is schemaless, I can define my data model in my app without having to make changes to any server code.


