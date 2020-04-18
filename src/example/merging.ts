interface InfoInter {
    name: string
    getRes(input: string): number
}

interface InfoInter {
    name: string
    getRes(input: number): string
}

let infoInter: InfoInter
infoInter = {
    name: 'AmosChen',
    getRes(text: any): any {
        if(typeof text === 'string') { return text.length }
        else  { return String(text) }
    }
}

console.log(infoInter.getRes("123"))
console.log(infoInter.getRes(123))

namespace Validations {
    const numberReg = 123
    export const num = 111
}
namespace Validations {
    // console.log(numberReg) // error only export can be accessed outside own namespace
    console.log(num)
}

class ValidationNS {
    constructor() { }
    public checkType() {
        console.log()
    }
}

namespace ValidationNS {
    export const numberReg = /^[0-9]+$/
}
console.dir(ValidationNS)
console.dir(ValidationNS.numberReg)
console.dir(new ValidationNS())

function countUp(){
    countUp.count++
}
namespace countUp {
    export let count = 0
}

enum Colors {
    red,
    green,
    blue
}

namespace Colors {
    export const yellow = 3
}