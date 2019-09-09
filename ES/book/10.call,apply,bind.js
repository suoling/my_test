// // call apply bind

function fn (x, y) {
  console.log(this, x, y)
}

fn(1, 2)

let obj = {}

fn.call(obj, 1, 2)

let arr = []

fn.apply(arr, [1, 2])

let set = new Set()

fn.bind(set, 1, 2)()




