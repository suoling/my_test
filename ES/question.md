### ECMAScript 6简介
- babel
    - @babel/core
    - @babel/preset-env
    - @babel/preset-react
    - @babel/cli
    - @babel/node
    - @babel/polyfill
    - @babel/register
    - API

### let 和 const 命令
- 顶层对象
    - 浏览器：window/self
    - Node环境：global
    - web Worker：self

### 变量的解构赋值
- 注意点
    - 如果要将一个已经声明的变量用于解构赋值，必须非常小心
        ```js
        // 错误的写法
        // 因为JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。
        let x;
        {x} = {x: 1};
        // SyntaxError: syntax error
        // 正确的写法
        let x;
        ({x} = {x: 1});
        ```
    - 解构赋值允许等号左边的模式之中，不放置任何变量名，这样的表达式虽然毫无意义，但是语法是合法的，可以执行
        ```js
        ({} = [true, false]);
        ({} = 'abc');
        ({} = []);
        ```
    - 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
        ```js
        let arr = [1, 2, 3];
        let {0 : first, [arr.length - 1] : last} = arr;
        first // 1
        last // 3
        ```
    - 字符串也可以解构赋值。因为此时，字符串被转换成了一个类似数组的对象。
        ```js
        // example 1
        const [a, b, c, d, e] = 'hello';
        a // "h"
        b // "e"
        c // "l"
        d // "l"
        e // "o"
        // example 2
        let {length : len} = 'hello';
        len // 5
        ```
- 函数参数的解构赋值
    ```js
    // 函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
    function move({x = 0, y = 0} = {}) {
      return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]
    ```
    ```js
    // 为函数move的参数指定默认值，而不是为变量x和y指定默认值
    function move({x, y} = { x: 0, y: 0 }) {
      return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, undefined]
    move({}); // [undefined, undefined]
    move(); // [0, 0]
    ```
- 圆括号问题
    - 不能使用圆括号的情况
        - 变量声明语句
        - 函数参数
        - 赋值语句的模式
    - 能使用圆括号的情况
        - 赋值语句的非模式部分

### 字符串扩展
- 概念有点模糊

### 字符串的新增方法

### 正则的扩展

### 数值的扩展

### 函数的扩展
- 函数参数的默认值
    - 参数变量是默认声明的，所以不能用let或const再次声明
        ```js
        function foo(x = 5) {
          let x = 1; // error
          const x = 2; // error
        }
       ```
    - 使用参数默认值时，函数不能有同名参数。
        ```js
        // 不报错
        function foo(x, x, y) {
          // ...
        }

        // 报错
        function foo(x, x, y = 1) {
          // ...
        }
        // SyntaxError: Duplicate parameter name not allowed in this context
        ```
    - 参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的
        ```js
        let x = 99;
        function foo(p = x + 1) {
          console.log(p);
        }

        foo() // 100

        x = 100;
        foo() // 101
        // 上面代码中，参数p的默认值是x+1。这时，每次调用函数foo，都会重新计算x+1，而不是默认p等于100。
        ```
- 与解构赋值默认值结合使用 
    - 同上述中的**变量的解构赋值**中的**函数参数的解构赋值**
- 严格模式

### 数组的扩展
- 扩展运算符
    - 暴露的问题
        - 运用
            - 替换apply方法
            - 
        - 原型的使用
            ```js
            // ES5的实现
            var arr1 = [0, 1, 2, 3]
            var arr2 = [4, 5, 6, 7]
            Array.prototype.push.apply(arr1, arr2) // 重点看
            console.log(arr1) // [0, 1, 2, 3, 4, 5, 6, 7]
            // ES6的实现
            arr1.push(...[arr2])
            console.log(arr1) // [0, 1, 2, 3, 4, 5, 6, 7]
            ```
- Array.from()
    - 对于还没有部署该方法的浏览器，可以用**Array.prototype.slice**方法替代

### 对象的扩展
-  属性名表达式
    - 属性名表达式不能和简洁表达式不能同时使用
        ```js
        // 报错
        const foo = 'bar';
        const bar = 'abc';
        const baz = { [foo] };

        // 正确
        const foo = 'bar';
        const baz = { [foo]: 'abc'};
        ```
