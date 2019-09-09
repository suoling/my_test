// 正则 DOTALL模式（s标志）

let regex = /hello . world/su

// 换行符
console.log(regex.test('hello \n world')) // false

// 回车符
console.log(regex.test('hello \r world')) // false

// 行分隔符
console.log(regex.test('hello \u{2028} world')) // false

// 段分隔符
console.log(regex.test('hello \u{2029} world')) // falseno