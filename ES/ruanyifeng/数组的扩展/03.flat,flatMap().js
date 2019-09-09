// flat 跳过空位
console.log([1, , [3, 4, [5, 6]]].flat())  // [ 1, 3, 4, [ 5, 6 ] ]

console.log([1, , [3, 4, [5, 6]]].flat(2))   // [ 1, 3, 4, 5, 6 ]

console.log([[1], 2, [3, 4, [5, [6]]]].flat(Infinity))  // [ 1, 2, 3, 4, 5, 6 ]

// flatMap
let arr = [1, , 3, 4]

let arr1 = arr.flatMap(item => [item, item * 2])
// 相当于 [[1, 2], [2, 4], [3, 6], [4, 8]].flat()
console.log(arr1) // [ 1, 2, 2, 4, 3, 6, 4, 8 ]

let arr2 = arr.flatMap(item => [[item]])
// 相当于 [[[1]], [[2]], [[3]], [[4]]].flat()      // [[1], [2], [3], [4]]
console.log(arr2) // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
