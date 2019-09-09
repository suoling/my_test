// for...of方法是通过可迭代对象的Symbol.iterator方法来获取迭代器并调用迭代器的next方法来获取值的

// 对象(Object)内部没有内置迭代器

// 与forEach方法相比，for...of循环可以使用break,return等语句终止循环，而forEach方法不可以
// 与for...in循环相比，for...of获取的是键值,而for...in循环获取的是键，若要处理的是值而不是键,则采用for...of更合适


// 为了能遍历异步的可迭代对象，使用for await...of循环，注意：该循环只能在异步函数中使用