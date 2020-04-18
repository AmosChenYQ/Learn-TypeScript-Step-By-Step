// export let time = new Date()
// setInterval(()=>{
//     time = new Date()
// }, 1000) // always changed

// if(true) {
//     export let time = 123
// }
// can not export in a conditional statement
function func() { console.log("123") }
export default func
// export { default as func }

function func1() { console.log("func1") }
// export { default as func1 }