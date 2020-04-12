const func1 = Symbol('func1')
class PointPrivateSymbol {
    constructor() {}
    static [func1] () { // outside a.js can not get symbol func1, so can not call it outside a.js 
        console.log("Hello World")
    }
}
console.log(func1) // Symbol(func1)
console.log(PointPrivateSymbol[func1]()) // Hello World

export default PointPrivateSymbol

