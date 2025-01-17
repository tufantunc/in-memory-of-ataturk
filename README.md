# in-memory-of-ataturk [![Build status](https://ci.appveyor.com/api/projects/status/f6a6mo6p8bxlprum?svg=true)](https://ci.appveyor.com/project/tufantunc/in-memory-of-ataturk) [![codecov](https://codecov.io/gh/tufantunc/in-memory-of-ataturk/branch/master/graph/badge.svg)](https://codecov.io/gh/tufantunc/in-memory-of-ataturk) [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url] [![License][license-image]][license-url] [![twitter][twitter-badge]][twitter]

> Shows a quote from Ataturk after nodejs exit.

## Install
```
$ npm install --save-dev in-memory-of-ataturk
```

## Usage

### Basic Usage
Just add and call it in your main app:
```js
const { app } = require('in-memory-of-ataturk');
app(); // Uses English quotes by default
```

### Language Selection
You can specify the language (supports 'en' for English and 'tr' for Turkish):
```js
const { app } = require('in-memory-of-ataturk');
app('tr'); // Uses Turkish quotes
```

### Getting Random Quotes Directly
You can also use the `getRandomQuote` function to get quotes programmatically:
```js
const { getRandomQuote } = require('in-memory-of-ataturk');
const quote = getRandomQuote('en'); // Get a random English quote
console.log(quote);
```

### Error Handling
The module includes proper error handling:
```js
try {
    app('fr'); // Will throw an error for unsupported language
} catch (error) {
    console.error(error.message); // "Unsupported language: fr. Supported languages are: en, tr"
}
```

## Supported Languages
- English (en)
- Turkish (tr)

[npm-image]: https://img.shields.io/npm/v/in-memory-of-ataturk.svg
[npm-url]: https://npmjs.org/package/in-memory-of-ataturk
[downloads-image]: http://img.shields.io/npm/dm/in-memory-of-ataturk.svg
[downloads-url]: https://npmjs.org/package/in-memory-of-ataturk
[license-image]: https://img.shields.io/:license-mit-blue.svg
[license-url]: LICENSE.md
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20in-memory-of-ataturk%20by%20%40tufant%20https%3A%2F%2Fgithub.com%2Ftufantunc%2Fin-memory-of-ataturk%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/tufantunc/in-memory-of-ataturk.svg?style=social

