// find 找出第一个符合条件的数组成员，如果没有符合条件的成员，则返回undefined
// findIndex 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

const data = [
  { name: '张三', age: 19 },
  { name: '李四', age: 21 },
  { name: '王五', age: 23 },
  { name: '小六', age: 18 },
]

const find1 = data.find(item => item.age > 20)

const find2 = data.find(item => item.age === 20)

console.log('find1:', find1)  // { name: '李四', age: 21 }
console.log('find2:', find2)  // undefined

const findIndex1 = data.findIndex(item => item.age > 20)

const findIndex2 = data.findIndex(item => item.age === 20)


console.log('findIndex1:', findIndex1) // 1
console.log('findIndex2:', findIndex2) // -1

const dataNan = [NaN]

const nan = dataNan.find(item => Object.is(item, NaN))
const nanIndex = dataNan.findIndex(item => Object.is(item, NaN))

console.log('nan:', nan) // NaN
console.log('nanIndex:', nanIndex) // 0