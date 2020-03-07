# vueTabTracker [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier) [![npm version: 6.14.2](https://img.shields.io/badge/npm%20version-6.14.2-blue)](https://www.npmjs.com/) [![node version: 13.10.1](https://img.shields.io/badge/node%20version-13.10.1-blue)](https://nodejs.org/) [![@vue/cli: 4.2.2](https://img.shields.io/badge/@vue/cli-4.2.2-blue)](https://github.com/vuejs/vue-cli) [![@vuetify/cli: 2.2.15](https://img.shields.io/badge/@vuetify/cli-2.2.15-blue)](https://vuetifyjs.com/en/getting-started/quick-start/)

A Vue.js, Node.js & Express web application for keeping track of guitar tabs (Full Stack application).

This project was created for the purpose of in-depth learning about MVC, Vue.js, VUEX, Sequelize, Node.js and Express.

For live demo [click here](https://adele-angel.github.io/vue-tab-tracker)
(can be downloaded as a mobile app)

User actions:
- Register and login into the system
- View recently visited songs (after login)
- View song bookmarks (after login)
- View song list
- View song metadata
- Edit song
- Add new song

> You can use the following credentials to login into the system:

    Username: john.doe@gmail.com
    Password: 12345678

## Built with

- Vue.js as client-side framework
- JSX
- Vuetify.js (Vue UI library, based on Material Design)
- CSS3
- HTML5
- Node.js as runtime environment
- Express.js as server-side framework
- Sequelize ORM for database (SQL)

## Prerequisites

- Single page application
- MVC pattern: Model-View-Controller architecture
- Reactive state management (Redux pattern using VUEX)
- User authentication
- Responsive design
- Progressive Web App

## Packages

**Client side dependencies**

```
adding @vuetify/cli:
$ vue add vuetify
```

```
$ npm install --save
axios vuetify vuex-router-sync vue-youtube-embed lodash vuex-persistedstate
```

**Server side dependencies**

```
$ npm install --save
express cors morgan body-parser sequelize sqlite3 @hapi/joi jsonwebtoken bcryptjs lodash passport passport-jwt
```

```
$ npm install --save-dev nodemon
```

## Usage

```
$ git clone https://github.com/adele-angel/vue-tab-tracker.git
$ cd /vue-tab-tracker
```

For client

```
$ cd /client
$ npm install
$ npm run serve
```

For server

```
$ cd /server
$ npm install
$ nodemon
```

Then open [`localhost:8080`](http://localhost:8080) in a browser

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
