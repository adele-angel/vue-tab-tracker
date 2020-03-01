# vueTabTracker [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier) [![npm version: 6.13.7](https://img.shields.io/badge/npm%20version-6.13.7-blue)](https://www.npmjs.com/) [![node version: 6.13.7](https://img.shields.io/badge/node%20version-13.5.0-blue)](https://nodejs.org/) [![@vue/cli: 4.2.2](https://img.shields.io/badge/@vue/cli-4.2.2-blue)](https://github.com/vuejs/vue-cli)

A Vue.js, Node.js & Express web application for keeping track of guitar tabs (Full Stack application).

:warning: :construction: _**work in progress**_

This project was created for the purpose of in-depth learning about MVC, Vue.js, VUEX, Sequelize, Node.js and Express.

For live demo [click here](https://adele-angel.github.io/vue-tab-tracker)

## Built with

- Vue.js as client-side framework
- JSX (ES6 JavaScript syntax)
- Vuetify.js (Vue UI library, based on Material Design)
- CSS3
- HTML5
- Node.js as runtime environment
- Express.js as server-side framework
- Sequelize ORM for database

## Prerequisites

- Single page application
- MVC pattern: Model-View-Controller architecture
- Reactive state management (Redux pattern using VUEX)

## Packages

**Client side dependencies**

```
$ npm install --save axios vuetify
```

**Server side dependencies**

```
$ npm install --save
express cors morgan body-parser sequelize sqlite3 @hapi/joi jsonwebtoken bcrypt
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
$ npm run serve
```

For server

```
$ cd /server
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