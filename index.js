'use strict';

var runes = require('runes');
var stringLength = require('string-length');

module.exports = function (str, _ref) {
  var size = _ref.size,
      _ref$unicodeAware = _ref.unicodeAware,
      unicodeAware = _ref$unicodeAware === undefined ? false : _ref$unicodeAware;

  str = str || '';

  if (!unicodeAware) {
    return getChunks(str, size);
  }

  return getChunksUnicode(str, size);
};

function getChunks(str, size) {
  var strLength = str.length;
  var numChunks = Math.ceil(strLength / size);
  var chunks = new Array(numChunks);

  var i = 0;
  var o = 0;

  for (; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

function getChunksUnicode(str, size) {
  var strLength = stringLength(str);
  var numChunks = Math.ceil(strLength / size);
  var chunks = new Array(numChunks);

  var i = 0;
  var o = 0;

  for (; i < numChunks; ++i, o += size) {
    chunks[i] = runes.substr(str, o, size);
  }

  return chunks;
}