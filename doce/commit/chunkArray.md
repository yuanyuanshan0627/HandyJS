# chunkArray()

```javascript
/**
 * 将一个数组分割成指定大小的数组函数
 * @param {Array} arr - 要分割的数组
 * @param {number} size - 指定大小
 * @returns {Array} - 返回分割后的二维数组
 */
function chunkArray(arr, size) {
  // 如果传入的不是一个数组，或者传入的size不是合法的数字，返回空数组
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }

  // 定义一个结果数组
  const result = [];

  // 遍历原数组
  for (let i = 0; i < arr.length; i += size) {
    // 截取指定大小的数组
    const chunk = arr.slice(i, i + size);
    // 将截取出来的数组插入结果数组
    result.push(chunk);
  }

  // 返回结果数组
  return result;
}

// 示例
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = chunkArray(arr, 3);
console.log(result); // 输出 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

使用方法：将以上代码复制粘贴到您的 js 代码中，并调用`chunkArray`函数即可。必须传递一个数组作为第一个参数，并传递一个正整数作为第二个参数，表示每个子数组的大小。调用函数后，它会返回一个包含多个子数组的二维数组，每个子数组的大小由第二个参数进行指定。
