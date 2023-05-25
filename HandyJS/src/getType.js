/**
 * 判断变量的数据类型
 *
 * @param {*} val - 需要判断的变量
 *
 * @returns {string} - 变量的数据类型
 */
export const getType = (val) => {
  // 使用 Object.prototype.toString 方法，返回变量的类型字符串
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};
