##演示：

```javascript
import { isValue } from "codecraft";
let data1 = "hello";
let data2 = 42;
let data3 = true;
let data4 = {};
let data5;
let data6 = null;

console.log(isValue(data1)); // true
console.log(isValue(data2)); // true
console.log(isValue(data3)); // true
console.log(isValue(data4)); // false
console.log(isValue(data5)); // false
console.log(isValue(data6)); // false
```

在这个示例中，我们使用 `isValue()` 函数分别检查了几种类型的数据，包括字符串、数字、布尔值、空对象、未定义的变量和空值。

函数将返回 true 如果数据有值，否则返回 false。对于字符串类型的数据，我们检查其长度是否为零；对于数字或布尔值，我们认为它们都是有值的；对于对象类型，我们检查其是否为空对象；最后，对于其他类型的数据，我们认为它们是没有值的。
