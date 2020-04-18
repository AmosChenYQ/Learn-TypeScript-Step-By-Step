// export const name = 'AmosChen'
// export const age = 20
// export const address = 'beijing'

const name = 'AmosChen'
const age = 20
const address = 'beijing'

export { name, age, address }

export default function func() {
    console.log("a exported func")
}

export class A {}

function func1() {}
class B {}
const b = ''
export {
    func1 as Function1,
    B as ClassB,
    b as StringB,
    b as String
}

// error
// export 'Amos'
// const namename = 'amos'
// export namename

