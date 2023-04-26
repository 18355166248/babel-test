"use strict";

var _codeFrame = require("@babel/code-frame");
var rawLines = "class Foo {\n  constructor()\n}";
var location = {
  start: {
    line: 2,
    column: 16
  }
};
var result = (0, _codeFrame.codeFrameColumns)(rawLines, location, {
  /* options */
});
console.log(result);