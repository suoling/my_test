// 箭头函数 使用注意点
let fn = () => { console.log(this) }
fn() // {}

function fn1 () { console.log(this) }
fn1() // Object [global]