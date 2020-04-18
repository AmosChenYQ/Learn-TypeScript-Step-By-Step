console.log("hw")

export interface FuncInterface {
    (arg: number): string
    name: string
}

export class ClassC {
    constructor() {}
}

class ClassD {
    constructor() {}
}

export { ClassD }
export { ClassD as ClassNameD }

export * from './b'
export { name } from './b'
export { age as Myage } from './b'