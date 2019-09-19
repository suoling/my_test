let a = 1;
let o = {
  a: 2,
  f(n){
    const b = ({n}) => {
      console.log('this:', this)
      const a = 111
      console.log('this.a:', this.a)
      this.a = n++;
    }
    return b;
  }
}
let x = o.f;
let y = x(3);
let z = y(4);


// 以下打印什么？
window.a   // undefined  因为只有在全局作用域下，var声明的变量和函数才会挂载在window下，而别的声明方式不会
o.a  // 2  对象o中的a属性对应的值
x.a  // undefined  只有原始数据类型不能设置属性，别的都可以，而x是f函数，归根结底不是原始数据类型
y.a  // undefined  与上述同理，y此处是b函数
z.a  // 报错 因为z是undefined，没有a属性，也不能挂载a属性