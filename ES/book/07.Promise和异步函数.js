// Promise
let promiseExample = new Promise((resolve, reject) => {
  resolve('success')
  // reject('error')
})

promiseExample.then(value => {
  console.log(value)
}).then(() => {
  console.log('111')
}).catch(error => {
  console.log('err:', error)
})


// 异步函数
function doSomething () {
  // return Promise.resolve('成功')
  return 'str'
}

async function fn () {
  const result = doSomething()
  return result
}

fn().then((value) => {
  console.log(value)
})



