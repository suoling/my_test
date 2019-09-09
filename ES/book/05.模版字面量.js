// 模版字面量  -- 1
if (!String.prototype.format) {
  String.prototype.format = function () {
    let args = arguments
    return this.replace(/{(\d+)}/g, (match, number) => {
      console.log(match, number)
      return typeof args[number] != 'undefined' ? args[number] : match
    })
  }
}
console.log('欢迎来自{0}的{1}'.format('广东', '小明'))

// 模版字面量  -- 2
function tag (strings, ...values) {
  console.log(arguments)
  console.log(strings)
  console.log('raw:', strings.raw)
  console.log(values)
}
let name = '王锁伶'
let desc = 'ES6'
tag`hello, ${name} welcome to ${desc} world`

// 模版字面量  -- 3
let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    console.log('result:', result)
    if (i < arguments.length) {
      result += arguments[i];
      console.log('result:', result)
    }
  }

  return result;
}

console.log('非raw:', 'Hi\n5')
console.log('raw:', String.raw`\uD83D\u{1F642}`, String.raw`Hi\n${2+3}!`)
