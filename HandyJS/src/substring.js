/**
 * 根据传入的参数截取字符串
 * @param {String} str 要截取的字符串
 * @param {Number} start 开始截取的位置，正数从前往后算，负数从后往前算。默认值为 0，即从字符串开头截取。
 * @param {Number} length 要截取的长度。默认值为字符串长度减去开始位置。
 * @param {Boolean} reverse 是否从后往前截取。默认值为 false，即从前往后截取。
 * @returns {String} 返回截取后的字符串。
 */
export const substring = (
  str,
  start = 0,
  length = str.length - start,
  reverse = false
) => {
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
};
