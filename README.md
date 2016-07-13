# http-reject-empty [![Build Status](https://travis-ci.org/noamokman/http-reject-empty.svg?branch=master)](https://travis-ci.org/noamokman/http-reject-empty) [![Coverage Status](https://coveralls.io/repos/github/noamokman/http-reject-empty/badge.svg?branch=master)](https://coveralls.io/github/noamokman/http-reject-empty?branch=master)
A function to reject empty values with an http exception

## Install

```
$ npm install --save http-reject-empty
```

## Usage
```js
const empty = require('http-reject-empty');

const promise = User.find({}) // find a user in the db
                  .then(empty);
```
If the promise returns a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, the promise is rejected with a 404 [http error](https://github.com/jshttp/http-errors)

## License

[MIT](LICENSE) © [Noam Okman](https://github.com/noamokman)
