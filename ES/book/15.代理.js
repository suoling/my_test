// 代理--proxy,可以修改对象的默认行为的一种机制。但它不会修改对象内部分方法
// Reflect--提供了一些与代理的处理器一一对应的方法，用于处理对象的默认行为

// 例子
let target = {}
let handler = {
  get: function (target, key) {
    return key in target ? target[key] : 1
  }
}
let proxy = new Proxy(target, handler)

proxy.x = 2

console.log(proxy.x) // 2
console.log(proxy.y) // 1