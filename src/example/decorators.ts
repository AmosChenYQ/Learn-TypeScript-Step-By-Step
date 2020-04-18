function setName() {
    console.log("get name")
    return (target: any) => {
        console.log("setname")
    }
}

function setAge() {
    console.log("get age")
    return (target: any) => {
        console.log("setage")
    }
}

@setName()
@setAge()
class ClassDec{

}
// get name
// get age
// setage
// setname

let sign = null
function setNameSign(name: string) {
    return (target: new(name: string) => any) => {
        sign = target
        console.log(target.name)
    }
}
// type ttt = new() => any
// let cls: ttt = ClassDec
@setNameSign("Amos")
class ClassDec2 {
    constructor(public name: string) {}
}
console.log(sign)
console.log(sign === ClassDec2)
console.log(sign === ClassDec2.prototype.constructor)
// will log ClassDec2, and f ClassDec2(name) { this.name = name }

function addNameProperty(constructor: new() => any) {
    constructor.prototype.name = 'Amos'
}

@addNameProperty
class ClassD {}

interface ClassD {
    name: string
}
// merging

let classd = new ClassD()
console.log(classd.name) // error // without merging code : Property 'name' does not exist on type 'ClassD'.


function classDecorator<T extends (new(...args: any[]) => object)>(target: T) {
    return class extends target {
        public newProperty = "Amos"
        public hello = "override"
    }
}

@classDecorator
class Greeter {
    public property = 'property'
    public hello: string
    constructor(m: string) {
        this.hello = m
    }
}

console.log(Greeter)
console.log(Greeter.prototype.constructor)
console.log(new Greeter("shit"))

interface ObjWithStringKey{
    [key: string]: any
}

let objs2: ObjWithStringKey = {}
Object.defineProperty(objs2, 'name', {
    value: 'Amos',
    writable: false,
    configurable: true,
    enumerable: true
})

console.log(objs2.name)

function enumerable(bool: boolean) {
    return (target:any,propertyName:string,descriptor:PropertyDescriptor) => {
        console.log(target, propertyName, descriptor)
        descriptor.enumerable = bool
    }
}

class ClassF {
    constructor(public age: number) {}
    @enumerable(false)
    public getAge() {
        return this.age
    }
}

const classf = new ClassF(22)
console.log(classf)

for(const key in ClassF) {
    console.log(key)
}