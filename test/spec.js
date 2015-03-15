'use strict';

var test = require('tape');
var schemify = require('../url-schemify');

test('add scheme | no options', function(t) {

  t.equal(schemify('google.com'), 'http://google.com');
  t.equal(schemify('www.example.com'), 'http://www.example.com');

  t.end();

});

test('add scheme | with options', function(t) {

  t.equal(schemify('google.com', { scheme: 'https' }), 'https://google.com');
  t.equal(schemify('www.example.com', { scheme: '' }), '//www.example.com');

  t.end();

});

test('do NOT add scheme | no options', function(t) {

  t.equal(schemify('http://google.com'), 'http://google.com');
  t.equal(schemify('https://www.example.com'), 'https://www.example.com');
  t.equal(schemify('//example.com'), '//example.com');
  t.equal(schemify('ftp://example.com'), 'ftp://example.com');

  t.end();

});

test('do NOT add scheme | with options', function(t) {

  t.equal(schemify('http://google.com', { scheme: 'https' }), 'http://google.com');
  t.equal(schemify('https://www.example.com', { scheme: '' }), 'https://www.example.com');
  t.equal(schemify('//example.com', { scheme: 'https' }), '//example.com');
  t.equal(schemify('ftp://example.com', { scheme: 'https' }), 'ftp://example.com');

  t.end();

});
