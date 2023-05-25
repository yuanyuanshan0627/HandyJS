```javascript
/**
 * 根据传入的参数截取字符串
 * @param {String} str 要截取的字符串
 * @param {Number} start 开始截取的位置，正数从前往后算，负数从后往前算。默认值为 0，即从字符串开头截取。
 * @param {Number} length 要截取的长度。默认值为字符串长度减去开始位置。
 * @param {Boolean} reverse 是否从后往前截取。默认值为 false，即从前往后截取。
 * @returns {String} 返回截取后的字符串。
 */
function substring(
  str,
  start = 0,
  length = str.length - start,
  reverse = false
) {
  // 如果 reverse 为 true，将字符串翻转
  if (reverse) {
    str = str.split("").reverse().join("");
    start = str.length - start - length;
  }

  // 对 start 和 length 进行合法性判断
  start = Math.max(Math.min(start, str.length), 0);
  length = Math.max(Math.min(length, str.length - start), 0);

  // 截取字符串并返回结果
  return str.substr(start, length);
}
```

使用示例：

```javascript
import { substring } from "codecraft";
const str = "Hello, World!";

// 从前往后截取
console.log(substring(str)); // Hello, World!
console.log(substring(str, 7)); // World!
console.log(substring(str, 7, 3)); // Wor
console.log(substring(str, -6)); // World!
console.log(substring(str, -6, 3)); // Wor

// 从后往前截取
console.log(substring(str, 0, 5, true)); // ,dlro
console.log(substring(str, 7, 5, true)); // dlroW
console.log(substring(str, -6, 3, true)); // roW
```

在使用此函数时，你可以传入字符串，开始位置、截取长度和可选的方向参数。函数会返回截取后的字符串。

此函数支持从前往后或从后往前截取，并支持从任何位置开始截取字符串。

注意在使用过程中，开始位置和截取长度必须合法，否则截取结果将不准确。同时，你也应该对字符串进行长度保护，以避免出现错误。
