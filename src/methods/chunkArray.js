/**
 * 将一个数组分割成指定大小的数组函数
 * @param {Array} arr - 要分割的数组
 * @param {number} size - 指定大小
 * @returns {Array} - 返回分割后的二维数组
 */
export const chunkArray = (arr, size) => {
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
};

// // 示例
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = chunkArray(arr, 3);
// console.log(result); // 输出 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
