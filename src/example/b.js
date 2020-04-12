// in b.js
import PointPrivateSymbol from './a.js'
const pps = new PointPrivateSymbol()
console.log(pps)
// PointPrivateSymbol {}
//   __proto__
//     constructor
//       Symbol(func1)
// error pps.func1 is not a function
// console.log(PointPrivateSymbol[func1]())
// console.log(PointPrivateSymbol.func1())
