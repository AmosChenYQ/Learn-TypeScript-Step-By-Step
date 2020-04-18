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
let isLetter = Validation.checkLetter('abc')
let isNumber = Validation.checkNumber(123)
console.log(Validation, isLetter, isNumber)

// tsc --outFile src/ts-modules/index.js src/ts-modules/index.ts


namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}

import polygens = Shapes.Polygons
let triangle = new polygens.Triangle()


