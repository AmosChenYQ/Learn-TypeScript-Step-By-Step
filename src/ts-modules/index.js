var Validation;
(function (Validation) {
    Validation.isLetterReg = /^[a-zA-Z]+$/;
    Validation.checkLetter = function (text) {
        return Validation.isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    Validation.isNumberReg = /^[0-9]+$/;
    Validation.checkNumber = function (text) {
        return Validation.isNumberReg.test(text);
    };
})(Validation || (Validation = {}));
// import { name as Myname } from './b'
// console.log(Myname) // Amos
// import * as info from './b'
// console.log(info) // {name: "Amos", age: 18, __esModule: true}
// import * as AData from './a'
// console.log(AData)
// import amosname from './c'
// same as
// import amosname = require('./c')
// console.log(amosname) // AmosChen
// import moment from 'moment'
// import * as moment from 'moment'
// import moment = require('moment')
// for tsc compile
/// <reference path="./letter-validation.ts"/>
/// <reference path="./number-validation.ts"/>
var isLetter = Validation.checkLetter('abc');
var isNumber = Validation.checkNumber(123);
console.log(Validation, isLetter, isNumber);
// tsc --outFile src/ts-modules/index.js src/ts-modules/index.ts
