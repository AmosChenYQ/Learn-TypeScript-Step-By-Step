"use strict";
exports.__esModule = true;
var arrayMap = require("../dist/test-array-map");
arrayMap([1, 2, 3], function (item) { return item + 4; }).forEach(function (item) { return console.log(item.length); });
