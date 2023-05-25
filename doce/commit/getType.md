以下是一个判断数据类型的函数，带有注释说明：

```js
/**
 * 判断变量的数据类型
 *
 * @param {*} val - 需要判断的变量
 *
 * @returns {string} - 变量的数据类型
 */
function getType(val) {
  // 使用 Object.prototype.toString 方法，返回变量的类型字符串
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
```

使用示例：

```js
console.log(getType("hello")); // 'string'
console.log(getType(123)); // 'number'
console.log(getType(true)); // 'boolean'
console.log(getType(null)); // 'null'
console.log(getType(undefined)); // 'undefined'
console.log(getType([])); // 'array'
console.log(getType({})); // 'object'
console.log(getType(new Date())); // 'date'
console.log(getType(/hello/)); // 'regexp'
console.log(getType(function () {})); // 'function'
```
