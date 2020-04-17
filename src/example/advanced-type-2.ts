class Counters {
    constructor(public count: number = 0) {}
    add(value: number) {
        this.count += value
        return this
    }
    subtract(value: number) {
        this.count -= value
        return this
    }
}

let count1 = new Counters(10)
console.log(count1.add(3).subtract(2))

class PowCounter extends Counters {
    constructor(public count: number = 0) {
        super(count)
    }
    pow(value: number) {
        this.count = this.count ** value
        return this
    }
}

let powCounter = new PowCounter(2)
console.log(powCounter.pow(3).add(1).subtract(3))

interface InfoInterfaceAdva {
    name: string,
    age: number
}

let infoProp: keyof InfoInterfaceAdva
infoProp = 'name'
// infoProp = 'shit' // error  Type '"shit"' is not assignable to type '"name" | "age"'.

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(n => obj[n])
}

const infoObj = {
    name: 'amos',
    age: 20
}

let infoValues: (string | number)[] = getValue(infoObj, ['name', 'age'])
console.log(infoValues) // ["amos", 20]

type NameTYPE = InfoInterfaceAdva['name'] // string

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}

interface Objs<T> {
    [key: string]: T
    // [kk: number]: T // then keys will be number | string
}
const ooo: Objs<number> = {
    age: 18
}
let keys: keyof Objs<number> // keys: string | number
type kkkkkk = keyof Objs<number> // string | number
type kkk = Objs<number>['number'] // number

interface TypeTypes {
    a: never,
    b: string,
    c: number,
    d: undefined,
    e: null,
    f: object
}

type typetypeskeys = keyof TypeTypes // "a" | "b" | "c" | "d" | "e" | "f"
type Test = TypeTypes[keyof TypeTypes] // string | number | object | null | undefined (never is lost)

interface Info1 {
    age: number
    name: string
    sex: string
}

// interface ReadonlyType {
//     readonly age: number
//     .....
// }

type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K]
}

type IsRequiredType<T> = {
    [K in keyof T]?: T[K]
}

type ReadonlyInfo1 = ReadonlyType<Info1>
// interface Info1 {
//     readonly age: number
//     readonly name: string
//     readonly sex: string
// }

type ReadonlyInfo1Inner = Readonly<Info1>

type IsRequiredInfo1 = IsRequiredType<Info1>

type IsRequiredInfo1Inner = Partial<Info1>
// type IsRequiredType = {
//     age?: number | undefined;
//     name?: string | undefined;
//     sex?: string | undefined;
// }

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface Info2 {
    name: string
    age: number
    address: string
}

const info5: Info2 = {
    name: 'amos',
    age: 18,
    address: 'beijing'
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const res: any = {}
    keys.map(key => {
        res[key] = obj[key]
    })
    return res
}

const nameAndAddress = pick(info5, ["name", "address"])
console.log(nameAndAddress)

function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
    const res: any = {}
    for(const key in obj) {
        res[key] = f(obj[key])
    }
    return res
}

const names = {0: 'hello', 1: "world", 2: "bye"}
const lengths = mapObject(names, (s) => s.length)
console.log(lengths) // {0: 5, 1: 5, 2: 3}

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(obj: T): Proxify<T> {
    const result = {} as Proxify<T>
    // tslint:disable-next-line: forin
    for(const key in obj) {
        result[key] = {
            get: () => obj[key],
            set: (value) => obj[key] = value
        }
    }
    return result
}

let props = {
    name: 'amos',
    age: 20
}

console.log(proxify(props))
console.log(proxify(props).name.get()) // amos

function unproxify<T>(obj: Proxify<T>): T {
    const result = {} as T
    // tslint:disable-next-line: forin
    for(const key in obj) {
        result[key] = obj[key].get()
    }
    return result
}

console.log(unproxify(proxify(props)))


type RemoveReadOnlyInfo1<T> = {
    -readonly [P in keyof T]: T[P]
}

type RemoveReadOnlyInfo = RemoveReadOnlyInfo1<Readonly<Info1>>

const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
type Objs2 = {
    [stringIndex]: string
    [numberIndex]: number
    [symbolIndex]: symbol
}
type keysType = keyof Objs2 // type keysType = 1 | "a" | typeof symbolIndex

let objs3: Readonly<Objs2> = {
    ['a']: 'aa',
    [1]: 123,
    [symbolIndex]: Symbol()
}

type MapToPromise<T> = {
    [K in keyof T]: Promise<T[K]>
}

type Tuples = [number, string, boolean]
type promiseTuple = MapToPromise<Tuples>
let tuples: promiseTuple = [
    new Promise((resolve, reject) => resolve(1)),
    new Promise((resolve, reject) => resolve('string')),
    new Promise((resolve, reject) => resolve(true))
]

// unknown
// any type can assign to unkown type
let value1: unknown
value1 = 'a'
value1 = 123

let value2: unknown
// let value3: string = value2 // Type 'unknown' is not assignable to type 'string'.

let value4: unknown
// value4 += 1 // Object is of type 'unknown'.

type type1 = string & unknown // string
type type2 = number & unknown // number
type type3 = unknown & unknown // unknown
type type4 = string[] & unknown // string[]

type type5 = unknown | string // unknown
type type6 = any | unknown // any
type type7 = unknown | number[] // unknown

// never is subset of unknown
type type8 = never extends unknown ? true : false // true
type type9 = keyof unknown

console.log(value1 === value2)  // or value1 !== value2 others will be incorrect


let value10: unknown
// value10.age // error


type Types1<T> = {
    [P in keyof T]: number
}

type type11 = Types1<any> // keyof any is string
// type type11 = {
//     [x: string]: number;
// }

type type12 = Types1<unknown> // {} keyof unknown is nothing

type Types2<T> = T extends string ? string : number
let index: Types2<'A'> // string

type TypeName<T> = T extends any ? T : never
type Type3 = TypeName<string | number> // string | number

type TypeNames<T> = 
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    object

type Type4 = TypeNames<()=>void> // ()=>void
type Type5 = TypeNames<string[]> // object
type Type6 = TypeNames<(()=>void) | string[]> // object | (() => void)

type Diff<T, U> = T extends U ? never: T
type TestDiff = Diff<string | number | boolean, undefined | number> // string | boolean

type Type7<T> = {
    [K in keyof T]: T[K] extends ((arg: string)=>void) ? K : never
}[keyof T]

interface Part {
    id: number
    name: string
    subparts: Part[]
    unpdatePart: (name: string)=>void
}

// type TestPart = Type7<Part> // updatePart
type TestPart = Type7<Part> // filter function

type Type8<T> = T extends any[] ? T[number] : T
type Test3 = Type8<string[]> // string
type Test4 = Type8<string> // string

type Type9<T> = T extends Array<infer U> ? U : T
type Test5 = Type9<string[]> // string
type Test6 = Type9<string> // string

// Exclude
type Type10 = Exclude<'a'|'b'|'c', 'a'|'b'> // 'c'

// Extract<T, U>
type Type11 = Extract<'a'|'b'|'c', 'c'|'b'> // 'b'|'c'

// NonNullable
type Type12 = NonNullable<string | number | null | undefined> // string | number

// R
type Type13 = ReturnType<()=>string>