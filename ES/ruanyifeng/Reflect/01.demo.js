const ages = [11, 33, 12, 54, 18, 96];

// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);

console.log(youngest, oldest, type)

// 新写法
// const youngest = Reflect.apply(Math.min, Math, ages);
// const oldest = Reflect.apply(Math.max, Math, ages);
// const type = Reflect.apply(Object.prototype.toString, youngest, []);