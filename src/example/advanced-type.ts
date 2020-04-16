const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    let res = {} as T & U;
    res = Object.assign(arg1, arg2)
    return res
}

// let obj1 = {a: 'a'};
// let obj2 = {b: 'b'};
// Object.assign(obj1, obj2) // {a: "a", b: "b"}

// mergeFunc({a: 'a'}, {b: "b"}).c // error Property 'c' does not exist on type '{ a: string; } & { b: string; }'.

const getLengthFunc = (content: number | string): number => {
    if(typeof content === 'string') return content.length
    else { return content.toString().length }
}

const valueList = [123, 'abc']
const getRandomValue = () => {
    const num: number = Math.random() * 10
    if(num < 5) { return valueList[0] }
    else { return valueList[1] }
} // => number | stgring
const item = getRandomValue()

function isString(value: number | string): value is string {
    return typeof value === 'string'
}

if(isString(item)) { // typeof item === 'string' can not use (typeof item).includes
    console.log(item.length)  // and must be number string Symbol boolean
}

if((item as string).length) {
    console.log((item as string).length)
}

console.log(typeof item === 'string')

class CreateByClass1 {
    constructor(public age: number = 18) {}
}

class CreateByClass2 {
    constructor(public name: string = 'AmosChen') {}
}

const getRandomItem = () => {
    const num: number = Math.random() * 10
    if(num < 5) { return new CreateByClass1() }
    else { return new CreateByClass2() }
} // => CreateByClass1 | CreateByClass2

const item1 = getRandomItem()

if(item1 instanceof CreateByClass1) {
    console.log(item1.age)
} else {
    console.log(item1.name)
}

// null and undefined
let valueS : string | null = "123" // string | undefined
let valueSS : string | undefined = "123" // string | undefined
valueS = valueSS

const getLengthFuncs = (value: string | null): number => {
    // if(value === null) return 0
    // else return value.length
    return (value || "").length
}

function getSplicedStr(num: number | null): string {
    function getRes(prefix: string) {
        return prefix + num!.toFixed().toString() // ! force tell compiler it is not null
    }
    num = num || 0.1
    return getRes("amos")
}
console.log(getSplicedStr(1.2)) // amos1

type TypeString = string
let lll: TypeString
type PositionT<T> = {x: T, y: T}
const position1: PositionT<number> =  {
    x: 1,
    y: -1
}
const position2: PositionT<string> =  {
    x: "1",
    y: "-1"
}

type Childs<T> = {
    current: T,
    child?: Childs<T>
}

let ccc: Childs<string> = {
    current: 'first',
    child: {
        current: "second",
        child: {
            current: "third"
        }
    }
}

// type Childss = Childs[]

// interface and type alias

type Alias = {
    num: number
}
interface Interface {
    num: number
}
let _alias : Alias = {
    num: 123
}
let _interface: Interface = _alias

// when you want to use implements, use interface

type Name = 'AmosC'
const nnn: Name = "AmosC"
// const nnn: Name = "AmosCCc" error : Type '"AmosCCc"' is not assignable to type '"AmosC"'.

type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction: Direction) {
    return direction.substr(0, 1)
}

console.log(getDirectionFirstLetter('north')) // n
// console.log(getDirectionFirstLetter("shit")) //error Argument of type '"shit"' is not assignable to parameter of type 'Direction'.

type Age = 18
interface InfoInterface {
    name: string,
    age: Age
}

const _info: InfoInterface = {
    name: 'amos',
    age: 18 // 19 error: Type '19' is not assignable to type '18'
}

