// 生成器：定义了一个包含自由迭代算法的函数，同时可自行维护自己的状态

// 高级生成器
function * generator () {
  let index = 0
  while (true) {
    let step = yield index++
    console.log(step)
    if (step === 4) {
      // index = 0
      return 99
    }
  }
}

let gen = generator()
console.log(gen.next(4)) // { value: 0, done: false } 首次next传的值被忽略，所以首次的step没有值
console.log(gen.next())  // undefined { value: 1, done: false }
console.log(gen.next(4)) // 4 { value: 0, done: false }          // 4 { value: 99, done: true } 
console.log(gen.next())  // undefined { value: 1, done: false }  //  value: undefined, done: true }

// 任务队列
class Task {
  constructor (tasks) {
    var me = this
    me.index = 0
    me.tasks = tasks
    me.generator = me.generator()
    me.generator.next()
  }

  * generator () {
    let me = this
    let tasks = me.tasks
    let result = null
    let data = null
    if (Array.isArray(tasks)) {
      for (let i = 0; i < tasks.length; i++) {
        result = yield me.send(`${tasks[0]}?params=${data ? data.params : ''}`, me.onComplete)
        data = JSON.parse(result)
      }
    }
  }

  send (url) {
    let me = this
    me.index++
    console.log(url)
    setTimeout(() => {
      me.onComplete(`{"params": ${me.index}}`)
    }, 10)
  }

  onComplete (result) {
    this.generator.next(result)
  }
}

let task = new Task(['https://localhost/', 'https://localhost/', 'https://localhost/'])

// 异步生成器
async function * asyGenerator () {
  try {
    yield 1
    yield 2
    yield 3
    yield 4
  } catch (error) {
    yield 99
  }
}

let asyGen = asyGenerator()
asyGen.next().then(args => console.log(args))  // { value: 1, done: false }
asyGen.next().then(args => console.log(args))  // { value: 2, done: false }
asyGen.throw().then(args => console.log(args)) // { value: 99, done: false }
asyGen.next().then(args => console.log(args))  // { value: undefined, done: true }

let fn = async function () {
  for await (const item of asyGenerator()) {
    console.log('for await...of:', item)  // 1  2  3  4
  }
}

fn()