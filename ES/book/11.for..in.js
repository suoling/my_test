// for...in

Object.prototype.jicheng1 = function () {
  console.log(1)
}

Object.prototype.jicheng2 = function () {
  console.log(2)
}

let obj = {
  a: 1,
  b: 2
}

for (let key in  obj) {
  console.log(key)
}