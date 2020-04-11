const getArray = (value: any, times: number = 5): any[] => {
    return new Array(times).fill(value)
}

// console.log(getArray(2))
// console.log(getArray(2, 3))

// This is OK [8, 8, 8]
console.log(getArray('AmosChen', 3).map((item) => item.length))
// This will log [undefined, undefined, undefined]
console.log(getArray(2, 3).map((item) => item.length))

// Ues generics can avoid this situation

const getArrayT = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

// error Argument of type '"AmosChen"' is not assignable to parameter of type 'number'
// getArrayT<number>('AmosChen', 3).map((item) => item.length)
getArrayT<string>('AmosChen', 3).map((item) => item.length)

const getArryTU = <T, U>(arg1: T, arg2: U, times: number): [T, U][] => {
    return new Array(times).fill([arg1, arg2])
}

console.log(getArryTU<number, string>(1, 'a', 3))

getArryTU(1, 'a', 3).map((item) =>{
    console.log(item[0])
    console.log(item[1])
    // Error Property 'length' does not exist on type 'number'.
    // console.log(item[0].length)
    // Error Property 'toFixed' does not exist on type 'string'.
    // console.log(item[1].toFixed())
})

let getArray1: <T>(arg: T, times: number) => T[]
getArray1 = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}
// Error  Property 'length' does not exist on type 'number'
// getArray1(123, 3).map(item => item.length)
console.log(getArray1(123, 3).length) // 3

type GetArray = <T>(arg: T, times: number) => T[]
let getArray2: GetArray = (arg: any, times: number): any[] => {
    return new Array(times).fill(arg)
}

// This is the same as GetArray
interface IGetArray<T> {
    (arg: T, times: number): T[],
    array: T[]
}

let getArrayI: IGetArray<number> = ((): IGetArray<number> => {
    const func = (arg: number, times: number): number[] => {
        return new Array(times).fill(arg)
    }
    func.array = ([] as number[])
    return func
})()

interface IValueWithLength {
    length: number
}

const getArrayFillingLength = <T extends IValueWithLength>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg.length)
}

// Error Argument of type '100' is not assignable to parameter of type 'IValueWithLength'
// getArrayFillingLength(100, 100)
getArrayFillingLength([1, 2, 3], 100)

const getProps = (object: any, propName: string) => {
    return object[propName]
}
const objs = {
    a: 'a',
    b: 'b'
}
console.log(getProps(objs, 'a')) // a
console.log(getProps(objs, 'c')) // undefined

const getPropsT = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}
// keyof T will return a lisf of all properties in object with type T : keyof T <=> "props1" | "props2" | .... | "propsn"
// So K will be one of the list

console.log(getPropsT(objs, 'a')) // a
// Error Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
// console.log(getPropsT(objs, 'c'))