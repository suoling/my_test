// 模拟私有成员

var Car

(function () {
  // 私有变量
  var _color = null

  // 构造函数
  Car = function (color) {
    _color = color
    this.bindColor = color
  }

  Car.prototype.setColor = function (value) {
    _color = value
  }

  Car.prototype.getColor = function () {
    return _color
  }
}())

var car = new Car('red')
console.log(car._color)      // undefined    私有的变量，返问不到
console.log(car.bindColor)   // red
console.log(car.getColor())  // red
car.setColor('black')
console.log(car.getColor())  // black