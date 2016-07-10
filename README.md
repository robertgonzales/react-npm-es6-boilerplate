# react-npm-es6-boilerplate

A boilerplate for creating react npm packages.

* Publish to npm with minimal setup.
* Create examples using es6, jsx, and sass.
* Develop with webpack + hot module reloading.
* Build your examples (ready for production).

### Installation

```
$ git clone https://github.com/robertgonzales/react-npm-es6-boilerplate.git app-name
$ cd app-name
$ npm install
```

### White label it

- Update name, description, author, repository in `package.json`
- Update app title in `src/index.html`

### Develop

* Hot reloading via webpack dev server:
    * `$ npm start`
    * Go to http://localhost:3000/

### Build

* Build once (ready for Production)
    * `$ npm run build`
    * Open `build/index.html` through the local webserver

### Publish

* Transpile `src` files into ES5 in `dist` folder:
    * `$ npm run prepublish`
    * or just `$ npm publish`


### Notes

* Adapted from https://github.com/nicksp/redux-webpack-es6-boilerplate
* Also borrowed from https://github.com/juliancwirko/react-npm-boilerplate