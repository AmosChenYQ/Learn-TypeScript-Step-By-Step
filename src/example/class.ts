class Point {
    public x: number
    public y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    getPosition() {
        return '(' + this.x + ', ' + this.y + ')'
    }
}
const point = new Point(1, 2)
console.log(point.getPosition())

class Parent {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}

class Child extends Parent {
    constructor(name: string) {
        super(name)
    }
}

// public ( default public )
// private
// protected

class ParentP {
    private age: number
    constructor(age: number) {
        this.age = age
    }
}
const pp = new ParentP(18)
// console.log(pp.age) // Error Property 'age' is private and only accessible within class 'ParentP'
// console.log(ParentP.age) // Errpr Property 'age' does not exist on type 'typeof ParentP'.
class ChildP extends ParentP {
    constructor(age: number) {
        super(age)
        // console.log(super.age) 
        // Error Only public and protected methods of the base class are accessible via the 'super' keyword.
    }
}
class ParentPT {
    protected age: number
    constructor(age: number) {
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}
class ChildtPT extends ParentPT {
    constructor(age: number) {
       super(age)
    // console.log(super.age) // Error Only public and protected methods of the base class are accessible via the 'super' keyword
       console.log(super.getAge())
    }
}

class ParentProtect {
    protected age: number
    protected constructor(age: number) {
        this.age = age
    }
}
class ChildtProtect extends ParentProtect {
    constructor(age: number) {
       super(age)
    }
}

// const ppt = new ParentProtect(20) // Error Constructor of class 'ParentProtect' is protected and only accessible within the class declaration
const cpt = new ChildtProtect(20)  // OK

class UserInfo {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
const userInfo = new UserInfo("Amos")
console.log(userInfo.name) // Amos
// userInfo.name = "Chen" // error Cannot assign to 'name' because it is a read-only property.

class A {
    constructor(public name: string) {
        console.log(name)
    }
}
const a1 = new A('Amos')
console.log(a1) // A {name: "Amos"}
console.log(a1.name) // Amos
// change public to private will error Property 'name' is private and only accessible within class 'A'.


class ParentStatic {
    private static age: number = 18
    public static getAge() {
        return ParentStatic.age
    }
    constructor() {
        console.log("ParentStatic")
    }
}
const ps = new ParentStatic()
//  private static age: number = 18 => public static age: number
// console.log(p.age) // error Property 'age' is a static member of type 'ParentStatic'
// console.log(p.getAge()) // error Property 'getAge' is a static member of type 'ParentStatic'
// console.log(ps.age) // error Property 'age' is a static member of type 'ParentStatic'
// console.log(ParentStatic.age) // error  Property 'age' is private and only accessible within class 'ParentStatic'

class Info {
    public name: string
    public age?: number
    private _infoStr: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
        this._infoStr = '0'
    }
    get infoStr() {
        return `${this.name}: ${this.age} ${this._infoStr}`
    }
    set infoStr(value) {
        console.log(`setter ${value}`)
        this._infoStr = value
    }
}
const info1 = new Info("Amos")
const info3 = new Info("Amos", 18)
const info4 = new Info("Amos", 18, 'man')
console.log(info1)
console.log(info3)
console.log(info4)
console.log(info4.infoStr) // Amos: 18 0

// Info {sex: undefined, name: "Amos", age: undefined, _infoStr: "0"}
// Info {sex: undefined, name: "Amos", age: 18, _infoStr: "0"}
// Info {sex: "man", name: "Amos", age: 18, _infoStr: "0"}

// abstract

abstract class People {
    constructor(public name: string) {}
    public abstract printName(): void
}
// const p1 = new People() // Error Cannot create an instance of an abstract class.
class Man extends People {
    constructor(name: string) {
        super(name)
        this.name = name
    }
    public printName() {
        console.log(this.name)
    }
}
const m = new Man("Amos")
m.printName()

abstract class PeopleGS {
    abstract _name: string
    abstract get insideName(): string
    abstract set insideName(value: string) // A 'set' accessor cannot have a return type annotation.
}

class P extends PeopleGS {
    public _name: string
    public insideName: string // !
    constructor() {
        super()
        this._name = "Amos"
        this.insideName = "Chenyq"
    }
}

class Person {
    constructor(public name: string) {}
}
let person: Person = new Person("Amos")
class Animal {
    constructor(public name: string) {}
}
person = new Animal("dog") // this is OK when two constructs are the same

interface IFoodInterface {
    type: string,
}
// Interface will check properties of the instance which created by class
class FoodClass implements IFoodInterface {
    public type: string
    // public static type: string // Class 'FoodClass' incorrectly implements interface 'IFoodInterface'.Property 'type' is missing in type 'FoodClass' but required in type 'IFoodInterface'.
    constructor(type: string) {
        this.type = type
    }
}

class B {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
}
interface I extends B {}
// class B implements I {  }  Error Class 'B' incorrectly implements interface 'I'.
// class C implements I {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// Class 'C' incorrectly implements interface 'I'.
//   Property 'name' is protected but type 'C' is not a class derived from 'B'.
// Correct
class CC extends B implements I {
    public name: string
    constructor(name: string) {
        super(name)
        this.name = name
    }
}

const create = <T>(cls: new() => T): T => {
    return new cls()
}

class InfoC {
    constructor(public age: number) {}
}

// create(InfoC)