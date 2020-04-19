interface ObjectA {
    a: string
}
interface ObjectB {
    b: string
}

let Aa: ObjectA = {
    a: "a"
}
let Bb: ObjectB = {
    b: "b"
}
let AB: ObjectA & ObjectB = Object.assign(Aa, Bb)
console.log(AB)

class ClassAa {
    public funA() { console.log("classAa") }
    constructor(public isA: boolean) {}
}
class ClassBb {
    public funB() { console.log("classBb") }
    constructor(public isB: boolean) {}
}

class ClassAB implements ClassAa, ClassBb {
    public funA() { console.log("classAB A") }
    public funB() { console.log("classAB B") }
    constructor(public isA: boolean, public isB: boolean) {}
}

function mixins(base: any, from: any[]) {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
            console.log(key)
            base.prototype[key] = fromItem.prototype[key]
        })
    })
}

mixins(ClassAB, [ClassAa, ClassBb])
const abclass = new ClassAB(true, false)
console.log(abclass)
abclass.funA()
abclass.funB()
