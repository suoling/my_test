// resolve 的值是 undefined
Promise.resolve(2).then((res) => { console.log(res) }, () => {})

// resolve 的值是 2
Promise.resolve(2).finally((res) => { console.log(res) })

// reject 的值是 undefined
Promise.reject(3).then(() => {}, (res) => { console.log(res) })

// reject 的值是 3
Promise.reject(3).finally((res) => { console.log(res) })