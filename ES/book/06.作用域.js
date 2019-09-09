var a = 1, b = 2;

function add(a, b){
  a = a + 1;
  b = b + 1;
}

add (a, b)

console.log(a, b)

var obj = {
  a:1,
  b:2
}

function add1(tmp){
  tmp.a = tmp.a + 1;
  tmp.b = tmp.b + 1;
}

add1(obj)

console.log(obj)


var a = 'abc'

function change(str){
  str = str + 'abc'
}

change(a)

console.log(a)


var arr = [1,2]

function changeArr(arr){
  arr.push(3)
}

changeArr(arr)

console.log(arr)

