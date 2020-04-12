import { isConstructSignatureDeclaration } from "typescript";

// In ES5
function Point(x, y) {
    this.x = x;
    this.y = y;
}
console.log(Point.name)
Point.prototype.getPosition = function() {
    return '(' + this.x + ', ' + this.y + ')'
}
var p1 = new Point(2, 3)
console.log(p1)
console.log(p1.getPosition())
var p2 = new Point(4, 5)
console.log(p2.getPosition())
// In ES6
class PointNew {
    constructor(x, y) {
        this.x = x
        this.y = y
        // return {a: 'a'} return {a: 'a'} not a instance of PointNew
    }
    getPosition() {
        return '(' + this.x + ', ' + this.y + ')'       
    }
}
const p3 = new PointNew(2, 3)
console.log(p3.getPosition())

console.log(p3.hasOwnProperty('x')) // true
console.log(p3.hasOwnProperty('getPosition')) // false
console.log(p3.__proto__.hasOwnProperty('getPosition')) // true

var info = {
    _age: 18,
    set age(newValue) {
        if(newValue > 18) {
            console.log("Older!")
        } else {
            console.log(newValue)
        }
    },
    get age() {
        console.log("Very young")
        return this._age
    }
}

console.log(info.age) // log: very yound \n 18
info.age = 22 //log: Older
info.age = 16 //log: 16

// in ES6

class Info {
    constructor(age) {
        this._age = age
    }
    set age(newAge) {
        console.log("new age is:" + newAge)
        this._age = newAge
    }
    get age() {
        console.log("age is:" + this._age)
        return this._age
    }
}

var info2 = new Info(18);
info2.age = 22 // log: new age is:22
console.log(info2.age) // log: age is:22 \n 22 

// const func = function() {

// }
// function func() {

// }

const InfoC = class c {
    constructor() {
        this.testProperty = "test property"
    }
}
// This is error, ReferenceError: c is not defined
// const testInfo = new c()
const testInfo2 = new InfoC()

// console.log(testInfo.testProperty)
console.log(testInfo2.testProperty) // log test property
// This is same
// const InfoC = class  {
//     constructor() {
//         this.testProperty = "test property"
//     }
// }

function testNameFunc() {}
console.log(testNameFunc.name) // log testNameFunc
// Static methos
class PointStatic {
    // z = 0 can be added in browsser then will get new PointStatic(1, 2) => PointStatic {z: 0, x: 1, y: 2}
    constructor(x, y) {
        this.x = x
        this.y = y
        // return {a: 'a'} return {a: 'a'} not a instance of PointNew
    }
    getPosition() {
        return '(' + this.x + ', ' + this.y + ')'       
    }
    static getClassName() {
        return PointStatic.name
    }
}
var ps = new PointStatic(2, 2)
console.log(ps.getPosition())
// Error ps.getClassName is not a function
// console.log(ps.getClassName()) 
console.log(PointStatic.getClassName()) // log PointStatic

// Other static methods

class PointStaticProperty {
        constructor(x) {
        this.x = x
    }
    // static z = 200 // add in browser
}
PointStaticProperty.y = 100
const psp = new PointStaticProperty(1)
console.log(psp)
console.log(psp.x) // 1
console.log(psp.y) // undefined
console.log(PointStaticProperty.y) // 100
// console.log(PointStaticProperty.z) // 200 (in browser)

// private methods and properties
// 1.
// tradition ways, but others can still use _func2 outside this file
// class PointPrivate {
//     func1() {
//     }
//     _func2() {
//     }
// }
// 2.
// const _func2 = () => {}
// class PointPrivate {
//     func1() {
//         _func2.call(this) // _func2 can not be run outside this file ?
//     }
// }
// const p = new PointPrivate()
// p._func2() // error p._func2 is not a function
// // 3.
// // Or use Symbol
// // in a.js
// const func1 = Symbol('func1')
// export default class PointPrivateSymbol {
//     constructor() {}
//     static [func1] () { // outside a.js can not get symbol func1, so can not call it outside a.js 
//         //....
//     }
// }
// // in b.js
// import PointPrivateSymbol from 'a.js'
// console.log(PointPrivateSymbol[func1]())
// Private properties with #
// class CoffeeMachine {
//     #waterLimit = 200;
//     #checkWater(value) {
//       if (value < 0) throw new Error("Negative water");
//       if (value > this.#waterLimit) throw new Error("Too much water");
//     }
//   }
//   let coffeeMachine = new CoffeeMachine();
//   // can't access privates from outside of the class
//   coffeeMachine.#checkWater(); // Error
//   coffeeMachine.#waterLimit = 1000; // Error

// new target
function PointNF() {
    console.log(new.target)
}
const pnf = new PointNF() // log f PointNF() { ... }
const pnf2 = PointNF() // undefined

class PPointNF {
    constructor() {
        console.log(new.target)
    }
}
const ppnf = new PPointNF()
// log
// class PPointNF {
//     constructor() {
//         console.log(new.target)
//     }
// }
class Parent {
    constructor() {
        if(new.target === Parent) {
            throw new Error("Can not instancelize!")
        }
        console.log(new.target)
    }
}
class Child extends Parent {
    constructor() {
        super()
    }
}
const c = new Child()
// log
// class Child extends Parent {
//     constructor() {
//         super()
//     }
// }

// const parent = new Parent() // Uncaught Error: Can not instancelize!