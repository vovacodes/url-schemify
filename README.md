# url-schemify
Tiny module for adding scheme to URLs

[![Build Status](https://travis-ci.org/wizardzloy/url-schemify.svg)](https://travis-ci.org/wizardzloy/url-schemify)
[![Coverage Status](https://coveralls.io/repos/wizardzloy/url-schemify/badge.svg?branch=master)](https://coveralls.io/r/wizardzloy/url-schemify?branch=master)

## Usage

To install module run:

```npm i -S url-schemify```

or

```npm install --save url-schemify```

then `require` module in your script:

```javascript
var schemify = require('url-schemify');
var assert = require('assert');

// url-schemify adds default scheme (http) to the URLs that miss it

assert.equal(schemify('google.com'), 'http://google.com');
assert.equal(schemify('www.example.com'), 'http://www.example.com');

// default scheme could be configured through the options parameter

assert.equal(schemify('google.com', { scheme: 'https' }), 'https://google.com');
// { scheme: '' } will produce protocol-related URL
assert.equal(schemify('www.example.com', { scheme: '' }), '//www.example.com');

// url-schemify doesn't modify URLs that already have scheme or protocol-related ones:

assert.equal(schemify('http://google.com'), 'http://google.com');
assert.equal(schemify('https://www.example.com'), 'https://www.example.com');
assert.equal(schemify('ftp://example.com'), 'ftp://example.com');
assert.equal(schemify('//example.com'), '//example.com');
```
