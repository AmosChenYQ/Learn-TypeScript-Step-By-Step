// Inherit
// In ES5
function Food() {
    this.type = 'food'
}
Food.prototype.getType = function() {
    return this.type
}
Food.staticMethod = function() {
    return "food static method"
}
function Vegetables (name) {
    this.name = name
}
console.log("debug")

Vegetables.prototype = new Food()
Vegetables.vegetableStaticMethod = function () {
    return Food.staticMethod()
}
const tomato = new Vegetables('tomato')
console.log(tomato.getType()) // food
console.log(tomato.type) // food
console.log(tomato.name) // tomato
console.log(Food.staticMethod()) // food static method
console.log(Vegetables.vegetableStaticMethod())

class Parent {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    static getNameStatic() {
        return this.name
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name)
        this.age = age // Only after call super(...) can we assign this.xxx = yyy
    }
}
const c = new Child('Amos', '20')
console.log(c) // Child {name: "Amos", age: "20"}
console.log(c.getName()) // Amos
console.log(c instanceof Child) // true
console.log(c instanceof Parent) // true
console.log(Child.getNameStatic()) // Child

console.log(Object.getPrototypeOf(Child) === Parent) // true

// Usage of super()
// 1. super as a function
// In ES6 standard only call super can we assigna this.xxx = yyy
// And super() can only be called in construct()
// 2. super as a object
//  2.1 in normal method -> parent class's prototype obejct
//  2.2 in static method -> parent class

class ParentS {
    constructor() {
        this.name = 'parent'
    }
    getName() {
        return this.name
    }
}
ParentS.getType = () => {
    return 'is parent'
}
class ChildS extends ParentS {
    constructor() {
        super()
        console.log("constructor: " + super.getName())
    }
    getParentName() {
        console.log("getParentName: " + super.getName())
    }
    getParentTypeError() {
        console.log("getParentName: " + super.getType())
    }
    static getParentType() {
        console.log("getParentName: " + super.getType())
    }
}
const cs = new ChildS() // log constructor: parent
cs.getParentName() // log getParentName: parent
// cs.getParentTypeError() // error (intermediate value).getType is not a function
ChildS.getParentType() // getParentName: is parent

class ParentT {
    constructor() {
        this.name = "parent"
    }
    print() {
        console.log(this.name)
    }
}
class ChildT extends ParentT {
    constructor() {
        super()
        this.name = 'child'
    }
    childParent() {
        super.print()
    }
}
const cc = new ChildT()
cc.childParent() // log child, this bind to cc

// Use super either as a function super() or as a oebject super.propery, do dot use super individual

// prototype
// __proto__ : __proto__ is browser developer provides, it is not defined in ES standard
// __proto__ points to the prototype
var objss = new Object()
console.log(objss.__proto__ === Object.prototype) // true

// sub-class's __proto__ points to father class itself
// sub-class's prototype's __proto__ points to father class's prototype
// instance's __proto__'s __proto__ points to father class instance's __proto__

// Build-in constructor function
// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object
// In ES5 can not be inheritted
// In ES6 can be inheritted
class CustomArray extends Array {
    constructor(...args) {
        super(...args)
    }
}

const arr = new CustomArray(3)
console.log(arr) // log [empty × 3]
console.log(arr.fill("*")) // log  ["*", "*", "*"]
console.log(arr.join("_")) // log *_*_*