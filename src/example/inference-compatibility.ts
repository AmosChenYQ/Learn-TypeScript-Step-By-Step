let Myname: string = "Amos";

let arr5 = [1, 2]
// arr5 = [2, 2, false] // Error Type 'false' is not assignable to type 'number'

window.onmousedown = function (MouseEvent: any) {
    console.log(MouseEvent)
}

interface MyInfo {
    name: string
    // info: {age: number} // all will be error, is deep-copy compare, compare recursive
}

let infos: MyInfo
const infoa = { name: "Amos" }
const infob = { age: 18 }
const infoc = { name: "Amos", age: 18 }
infos = infoa;  // ok
// infos = infob; // error
infos = infoc; // ok

let x = (a: number) => 0
let y = (a: number, b: string) => 0
// y = x // ok
// x = y //error Type '(a: number, b: string) => number' is not assignable to type '(a: number) => number'
 
const arrs = [1, 2, 3]
// arrs.forEach((item, index, array) => {console.log(item);})

const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
    return callback(...arr)
}

console.log( 
    getSum([1, 2], (...args: number[]): number => { return args.reduce((sum, item) =>  sum + item , 0) }) // log 3
)

console.log(
    getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number): number => { return arg1 + arg2 + arg3 })
); // log 6

let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}
// funcA = funcB // Type 'string' is not assignable to type 'number'.
funcB = funcA // ok

// Return Type
let xx = (): string | number => 0
let yy = (): string => 'a'
// xx = yy //ok
// yy = xx // error Type 'number' is not assignable to type 'string'.

// Function override
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
    return arg1 + arg2
}

function sum(arg1: number, arg2: number): number
function sum(arg1: any, arg2: any): any {
    return arg1 + arg2
}

let func = merge
// func = sum // error Type '(arg1: number, arg2: number) => number' is not assignable to type '{ (arg1: number, arg2: number): number; (arg1: string, arg2: string): string; }'.

// sum only includes one function override number, but merge has number and string

enum StatusIn {
    On,
    Off,
}

let ss = StatusIn.On
ss = 1 // ok

enum AnimalIn {
    Dog,
    Cat,
}
// ss = AnimalIn.Dog // error Cannot assign to 's' because it is a constant.

class AnimalClass {
    public static age: number;
    constructor(public name: string) {}
}
class PeopleClass {
    public static age: string;
    constructor(public name: string) {}
}
class FoodIsClass {
    constructor(public name: number) {}

}

let animal: AnimalClass = new AnimalClass("dog")
let people: PeopleClass = new PeopleClass("amos")
let food: FoodIsClass = new FoodIsClass(10)

animal = people // ok
// animal = food // error Type 'FoodIsClass' is not assignable to type 'AnimalClass'  Types of property 'name' are incompatible.

// private
// proteced 
// will affect type

// example

class ParentClass {
    private age: number
    constructor(age: number) { this.age = age }
}

class ChildClass extends ParentClass {
    constructor(age: number) {
        super(age)
    }
}

class OtherClass {
    private age: number // and also in example of protected
    constructor(age: number) { this.age = age }
}

const childlren: ParentClass = new ChildClass(10) // ok
// sub-class can assign to parent class
// const other: OtherClass = new ParentClass(10)  // error Types have separate declarations of a private property 'age'.
// error if change private to protected:  Type 'ParentClass' is not assignable to type 'OtherClass'. Property 'age' is private in type 'ParentClass' but not in type 'OtherClass'.


interface Data<T> {}
let data1: Data<number> = {}
let data2: Data<string> = {}
data1 = data2 // ok


