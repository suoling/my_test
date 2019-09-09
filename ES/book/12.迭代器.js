// 迭代器：被设计为一种特定的接口，只要具有该接口的对象，就可以实现遍历，且拥有next方法

// 同步迭代器的迭代方法，Symbol.iterator
// 异步迭代器的迭代方法，Symbol.asyncIterator,返回带有迭代结果的Promise对象

// next方法
let str = 'hello'
let iterator = str[Symbol.iterator]()
console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

