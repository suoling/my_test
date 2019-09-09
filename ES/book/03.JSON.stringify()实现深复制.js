// JSON.stringify()实现深复制
// 同时配合JSON.parse()使用
const obj1 = {
  a: 1,
  b: 2,
  c: { z: 3 }
}

let obj2 = JSON.stringify(obj1)

obj2 = JSON.parse(obj2)

obj2.c.z = 4

console.log(obj1.c.z ) // 3

console.log(obj2.c.z ) // 4