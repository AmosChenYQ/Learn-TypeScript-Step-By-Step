const s = Symbol()

const s2 = Symbol()
// console.log(s === s2) always false
const s3 = Symbol('Amos')
const s4 = Symbol('Amos')
// console.log(s3 === s4) always false
// s3 + "123" error
console.log(s4.toString()) // Symbol('Amos')
console.log(Boolean(s4)) // true
console.log(!s4) // false

let prop: string = 'name'
// const info = {
//     name: 'amos'
// }

const info = {
  [prop]: 'amos',
  [`my_${prop}_is`]: 'chenyq'
}
console.log(info) // {name: "amos", my_name_is: "chenyq"}
const s5 = Symbol('name')
const info2 = {
  [s5]: 'amoschen',
  age: '20',
  sex: 'man'
}
console.log(info2); // {Symbol(name): "amoschen"}
info2[s5] = 'hello' // can not access via this way: info2.s5
console.log(info2) //  {Symbol(name): "hello"}

for (const key in info2) {
  console.log(key) // age sex but not "symbol"!
}


console.log(Object.keys(info2)) // ["age", "sex"]
console.log(Object.getOwnPropertyNames(info2)) // ["age", "sex"]
console.log(JSON.stringify(info2)) //{"age":"20","sex":"man"}
console.log(Object.getOwnPropertySymbols(info2)) // [Symbol(name)]

// Symbol.for will return a symbol which is created before in global scope by value given
// scope range: current page, iframe, service-worker

// const s6 = Symbol.for('some-symbol')
// const s7 = Symbol.for('some-symbol')
// console.log(s6 === s7) // return true in web-browser console

const s8 = Symbol.for('some-symbol')

// Symbol.keyFor will return key of a symbol which is created by Symbol.for
console.log(Symbol.keyFor(s8)) // some-symbol
console.log(Symbol.keyFor(s5)) // undefined

// 11 Symbol vaules inner build by typescript

const obj3 = {
  [Symbol.hasInstance] (otherObj: any) {
    console.log(otherObj)
  }
}
console.log({a: 'a'} instanceof (obj3 as any)) // log abj3 then return false

let arr: any[] = [1, 2]
console.log('Before set isConcatSpreadable', ([] as number[]).concat(arr, [3, 4])) // [1, 2, 3, 4]
// console.log("Now array is", ([] as number[]).concat(arr, [6, 7]))
arr[(Symbol.isConcatSpreadable as any)] = false
console.log('After set isConcatSpreadable', ([] as number[]).concat(arr, [6, 7])) // [Array(2), 6, 7]


class C extends Array {
  constructor (...args: any[]) {
    super(...args)
  }
  static get [Symbol.species] () { // this method will be called and return 'Array' when a instance of class C is used to judge whether it is a instance of another class
    return Array
  }
  getName() {
    return 'AmosChenYQ'
  }
}

const c = new C([1, 2, 3])
const a = c.map((item) => item + 1)
console.log(a) // [2, 3, 4]
console.log(a instanceof C) // false
// a instanceof Array will return true without static get [Symbol.species] ()
console.log(a instanceof Array) // true


//Symbol.match
let obj4 = {
  [Symbol.match] (string: string) {
    console.log('match ',string.length)
  },
  [Symbol.split] (string: string) {
    console.log('split', string.length)
  }
}

'abcdef'.match(<any>obj4) // return length of string 'abcdef',match 6
// other symbol like Symbol.match
// Symbol.replace
// Symbol.search
// Symbol.split

'amoschenyq'.split(<any>obj4) // split 10

let arr_for_iter: number[] = [1, 2, 3]
let iterator: IterableIterator<number> = arr_for_iter[Symbol.iterator] ()
console.log(iterator.next())   // {value: 1, done: false}
console.log(iterator.next())   // {value: 2, done: false}
console.log(iterator.next())   // {value: 3, done: false}
console.log(iterator.next())   // {value: undefined, done: true}
console.log(iterator.next())   // {value: undefined, done: true}

let obj5: unknown = {
  [Symbol.toPrimitive] (type: any) {
    console.log(type)
  }
}

const res = (obj5 as number)++ // console.log will log number
const res2 = `abc${obj5}` // console.log will not log anything in typescript, but will log string in javascirpt

let obj6 = {
  [Symbol.toStringTag]: 'return amos_string'

  // same as this:
  /*
  [Symbol.toStringTag] () {
    return 'amoschenyq'
  }
  */
}

console.log(obj6.toString()) // [object return amos_string]

// with statement is no longer supported in typescript
// these tests should run as javascript
// let obj7 = {
//   a: 'a',
//   b: 'b'
// }

// with(obj7) {
//   console.log(a) // a
//   console.log(b) // b
// }
console.log(Array.prototype[Symbol.unscopables])
// {
//   copyWithin: true
//   entries: true
//   fill: true
//   find: true
//   findIndex: true
//   flat: true
//   flatMap: true
//   includes: true
//   keys: true
//   values: true
// }
// below attributes can not be accessed in with statement
