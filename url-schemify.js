'use strict';

var URL_SCHEME_REGEXP = /^((?:f|ht)tps?:)?\/\//;
var DEFAULT_SCHEME = 'http';

module.exports = function(url, options) {
  options || (options = {});

  var scheme = (options.scheme != null) ? options.scheme : DEFAULT_SCHEME;

  if (!URL_SCHEME_REGEXP.test(url)) {
    url = (scheme) ? (scheme + '://' + url) : ('//' + url);
  }

  return url;
};
