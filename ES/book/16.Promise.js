let promise = new Promise ((resolve, reject) => {
  reject('error')
})

promise.catch(err => {
  console.log('err:', err)
})