import { time } from './b'
// setInterval(()=>{
//     console.log(time)
// }, 1000)
// always change
import {name as namename, age as ageage, objs} from './c'
// namename = 'Achen' // error namename is undefined
objs.name = "chenyq"

// import './d' // can change title to Amos Learning TS, excuted d.js
getName() // can still log Amos before it is be loaded
import { getName } from  './e'

// import {name} from './c'
// import {age} from './c'
// =>
// impoer {name,age} from './c'
import funcname from './b'
// impoer { default as funcname } from './b'
funcname() // 123

import str from './e'
console.log("import from ./e")
console.log(str)  // chenyingqin

// import funcA, {name, age, address} from './a'
// funcA()
// console.log(name, age, address)
//a exported func
// AmosChen 20 beijing

export { name, age } from './a'
// import { name, age } from './a'
// export { name, age }
// console.log(name, age) // error can not assess name and age

// import()
// dynamic loading
const status = 0
if(status) {
    import('./a')
} else {
    import('./d') // load d
}