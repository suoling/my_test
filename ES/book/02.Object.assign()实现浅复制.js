// Object.assign()实现浅复制

const obj1 = {
  a: 1,
  b: 2,
  c: { z: 3 }
}

const obj2 = Object.assign({}, obj1)

obj2.c.z = 4

console.log(obj1.c.z ) // 4

console.log(obj2.c.z ) // 4