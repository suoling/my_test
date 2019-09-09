let letter = ['a', 'b', 'c'];

// for...of进行遍历
for (const [key, value] of letter.entries()) {
  console.log(key, value) // 0 'a'    1 'b'    2 'c'  
}

for (const entry of letter.entries()) {
  console.log(entry) // [ 0, 'a' ]   [ 1, 'b' ]   [ 2, 'c' ]
}

for (const value of letter.values()) {
  console.log(value) // a b c
}

for (const key of letter.keys()) {
  console.log(key) // 0 1 2
}

// 手动调用遍历器对象的next方法，进行遍历
let entries = letter.entries();
console.log(entries) // Object [Array Iterator] {}  遍历器对象
console.log(entries.next()); // { value: [ 0, 'a' ], done: false }
console.log(entries.next()); // { value: [ 1, 'b' ], done: false }
console.log(entries.next()); // { value: [ 2, 'c' ], done: false }

let values = letter.values();
console.log(values) // Object [Array Iterator] {}  遍历器对象
console.log(values.next()); // { value: 'a', done: false }
console.log(values.next()); // { value: 'b', done: false }
console.log(values.next()); // { value: 'c', done: false }

let keys = letter.keys();
console.log(keys) // Object [Array Iterator] {}  遍历器对象
console.log(keys.next()); // { value: 0, done: false }
console.log(keys.next()); // { value: 1, done: false }
console.log(keys.next()); // { value: 2, done: false }