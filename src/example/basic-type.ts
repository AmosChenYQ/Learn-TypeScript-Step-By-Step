let num: number = 123
num = 0b11111011
num = 0o173
num = 0x7b

let str: string
str = 'abc'
str = `number is ${num}`
console.log(str)

let arr1: number[]

let arr2: Array<number>

let arr3: (string | number)[]

arr3 = [1, 'a']

let arr4: Array<number|string>

arr4 = [1, 2, 'a']

let tuple: [string, number, boolean]

tuple = ['a', 123, false]

enum Roles {
    SUPER_ADMIN,
    ADMIN = 4,
    USER
}

console.log(Roles.ADMIN)
console.log(Roles[0])

let value: any
value = 'abc'
value = 123

const consoleTest = (text: string): void => {
    console.log(text)
}


consoleTest("123")
let v: void
v = undefined
let u: undefined
u = undefined
let n: null
n = null
v = u
/*
v = n
u = v
u = n
n = v
n = u
all errors
*/

// Type 'never' is a sub type of any types, so a value with never type can assign to any other types's variable
// Type 'never' has no sub type, so a variable with type 'never' can only be assigned by other variables with nerver type
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while(true) {}
}
// errorFunc("abc")

// let nerverVar: never = (() => {
//     while(true) {}
// })()

// num = nerverVar
// nerverVar = num 

let obj1 = {
    name: 'amos'
}
let obj2 = obj1
obj2.name = 'chenyq'
console.log(obj1.name);
function getObject(obj: object): void {
    console.log(obj)
}
getObject(obj2)

// type asserts
const getLength = (target: string | number): number => {
    if ((<string>target).length || (<string>target).length === 0) {
        return (target as string).length
    } else {
        return target.toString().length
    }
}

console.log(getLength(123));
console.log(getLength('123'));