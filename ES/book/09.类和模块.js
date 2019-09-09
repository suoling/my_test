// 类 和 模块

// 静态static
class Car {
  static fn1 () {
    console.log('I am statuc')
  }

  fn2 () {
    console.log('I am not static')
  }
}

// Car.fn1()

class Sub extends Car {
  
}

Sub.fn1()

// let car = new Car()

// car.fn1()

// car.fn2()

// 同名属性和方法
class Super {
  constructor (desc) {
    this.desc = desc
  }
  method() {
    console.log('super:', this.desc)
  }
}

class Sub1 extends Super {
  constructor (desc) {
    super('我是super')
    // super.method()
    // this.desc = desc
  }
  method () {
    console.log('sub:', this.desc)
    super.method()
  }
}

let example = new Sub1()
example.method()
// console.log(example.desc)