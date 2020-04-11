const getFullName = ({firstName, lastName}: {firstName: string, lastName: string}) => {
  return `${firstName} ${lastName}`;
}

// tslint:disable-next-line: no-console
console.log(getFullName({lastName: "Chen", firstName: "Amos"})); // Amos Chen

interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullNameWithInterface = ({firstName, lastName}: NameInfo): string => {
  return `${firstName} ${lastName}`;
}

console.log(getFullNameWithInterface({firstName: "Amos", lastName: "Chen"}));

// this will error
// console.log(getFullNameWithInterface({firstName: "Amos", lastName: 189}));

interface Vegetable {
  color?: string,
  readonly type: string
}

const getVegetable = ({ color, type }: Vegetable) => {
  return `A ${color ? (color + ' ') : ''}${type}`
}

console.log(getVegetable({color: "red", type: "tomato"}));
console.log(getVegetable({type: "tomato"}));
// error
// console.log(getVegetable({type: "tomato", size: "big"}));
console.log(getVegetable({type: "tomato", size: "big"} as Vegetable));

// Or you can change interface like this:
interface VegetableA {
  color?: string | undefined,
  type: string,
  weight: number,
  [prop: string]: any
}

const getVegetableA = ({ color, type }: VegetableA) => {
  return `A ${color ? (color + ' ') : ''}${type}`
}
// Error:
console.log(getVegetableA({type: "tomato", size: "big", weight: 100, height: 100}));

// Or you can use 'Type compatibility' in TS
const vegetableInfo = {
  type: 'tomato',
  color: 'red',
  size: 2
}

console.log(getVegetable(vegetableInfo));

let vegetableObj: Vegetable = {
  type: 'potato'
}
// this will error Cannot assign to 'type' because it is a read-only property
// vegetableObj.type = 'apple'

interface ArrInter {
  0: number,
  1: string
}
// this will error Type 'number' is not assignable to type 'string'.
// let arr: ArrInter = [1, 1]
let arrInter: ArrInter = [1, 'a']

interface ArrNewInter {
  0: number,
  readonly 1: string
}

let arrInter2: ArrNewInter = [1, 'b']
// error Cannot assign to '1' because it is a read-only property
// arrInter2[1] = 'c'


// interface AddFunc {
//   (num1: number, num2: number): number
// }
// eslint will inform this: Interface has only a call signature
// — use `type AddFunc = (num1: number, num2: number) => number` instead.
// (callable-types)

type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2
// error Type 'string' is not assignable to type 'number'
// const add: AddFunc = (n1, n2) => `${n1} + ${n2}`

interface RoleDic {
  [id: number]: string
}

const role: RoleDic = {
  0: 'ADMIN',
 // error: 'A': 'rolw2'
}

interface Role2Dic {
  [id: string]: string
}

const role2: Role2Dic = {
  0: 'ADMIN', // this is still ok because TS will transform number to string defaultly
  'A': 'USER'
}
// And in browser js will do the same thing

// interface inherited

// interface Vegetables {
//   color: string
// }

// interface Tomato {
//   color: string,
//   radius: number
// }

interface Vegetables {
  color: string
}

interface Tomato extends Vegetables {
  radius: number
}

interface Carrot extends Vegetables {
  length: number
}

const tomato1: Tomato = {
  radius: 1,
  color: 'orange'
}

const crarot1: Carrot = {
  length: 2,
  color: 'red'
}

// A way to make a var have longer life
// a count up function in JS
// way 1
// const countUp = (() => {
//   let count = 0;
//   return () => {
//     return count++
//   }
// })()
// countUp() returns 0
// countUp() returns 1
// and so on
// way 2
// let countUp = () => countUp.count++
// countUp.count = 0
// countUp() retutns 0
// countUp() returns 1

interface Counter {
  (): void, // this means it defines a function
  count: number
}

const getCounter = (): Counter => {
  const c = () => c.count++
  c.count = 0
  return c
}

const counter: Counter = getCounter()
console.log(counter()) // 0
console.log(counter()) // 1
