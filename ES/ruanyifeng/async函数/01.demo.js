async function f() {
  // return 111
  await Promise.reject('出错了');
}

f()
.then(v => console.log('success:', v))
.catch(e => console.log('error:', e))



// 即使前一个异步操作失败，也不要中断后面的异步操作

// 方法一
// async function f() {
//   try {
//     await Promise.reject('出错了');
//   } catch(e) {
//   }
//   return await Promise.resolve('hello world');
// }

// f()
// .then(v => console.log(v))

// 方法二
// async function f() {
//   await Promise.reject('出错了')
//     .catch(e => console.log(e));
//   return await Promise.resolve('hello world');
// }

// f()
// .then(v => console.log(v))