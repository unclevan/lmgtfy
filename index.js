'use strict';

const strictUriEncode = require('strict-uri-encode');

module.exports = query => {
  return 'https://lmgtfy.com/?q=' + strictUriEncode(query);
};
