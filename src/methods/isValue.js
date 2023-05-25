/**
 * 检查给定的数据是否有值
 * @param {*} data - 要检查的数据
 * @return {boolean} - 如果数据有值，则返回 true，否则返回 false
 */
export const isValue = (data) => {
  if (typeof data === "string") {
    // 如果是字符串，则检查长度是否为零
    return data.length > 0;
  } else if (typeof data === "number" || typeof data === "boolean") {
    // 如果是数字或布尔值，则一定是有值的
    return true;
  } else if (typeof data === "object") {
    // 如果是对象，则检查是否为空对象
    return Object.keys(data).length > 0;
  } else {
    // 如果是其他类型的数据，则认为是没有值的
    return false;
  }
};
