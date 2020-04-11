function add1(arg1: number, arg2: number) : number {
    return arg1 + arg2;
}

const add2 = (arg1: number, arg2: number) => arg2 + arg2

let add3: (x: number, y: number) => number // define a function object 2 nunmber params return number

add3 = (arg1: number, arg2: number) => arg1 + arg2
//  error Type '(arg1: number, arg2: string) => string' is not assignable to type '(x: number, y: number) => number'
// add3 = (arg1: number, arg2: string) => arg1 + arg2

// interface Add {
//     (arg1: number, arg2: number): number
// }

type Add = (arg1: number, arg2: number) => number
type isString = string
let addFunc: Add

addFunc = (arg1: number, arg2: number) => arg1 + arg2

let addFun1 = (arg1: any, arg2: any, arg3: any) => arg1 + arg2 + (arg3 ? arg3 : 0)

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number

let addFunction: AddFunction
addFunction = (x: number, y: number) => x + y
addFunction = (x: number, y: number, z: number | undefined) => x + y + (z ? z : 0)

console.log(addFunction(1, 2, 3))
console.log(addFunction(1, 2))

let addFunctionDefault = (x: number, y: number = 3) => x + y
console.log(addFunctionDefault(1,2))
console.log(addFunctionDefault(1))

// js
// function handleData() {
//     if(arguments.length === 1) return arguments[0] * 2;
//     else if(arguments.length === 2) return arguments[0] * arguments[1];
//     else return Array.prototype.join.call(arguments, '_')
// }
// handleData(2)
// 4
// handleData(2, 4)
// 8
// handleData(1, 2, 3, 4)
// "1_2_3_4"

// const handleData = (arg1: number, ...args: number[]) => {
//     return arg1;
// }

// function handleData(x: number): number[]
// function handleData(x: string): string[]

function handleData(x: any): any[] {
    if (typeof x === 'string') {
        return x.split('')
    } else if (typeof x === 'number') {
        return x.toString().split('').map((item: string): number => Number(item))
    }
    return x
}

console.log(handleData('AmosChen')) // ["A", "m", "o", "s", "C", "h", "e", "n"]
console.log(handleData(20200411)) // [2, 0, 2, 0, 0, 4, 1, 1]

