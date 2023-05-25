/**
 * 函数防抖
 * @param {Function} fn 需要防抖的函数
 * @param {number} delay 防抖时间(ms)
 * @returns {Function} 包装后的防抖函数
 */
export const debounce = (fn, delay = 500) => {
  let timerId = null; // 定义一个计时器变量

  return function (...args) {
    // 每次函数被调用时，都清除前一个计时器
    clearTimeout(timerId);
    // 启动一个新的计时器
    timerId = setTimeout(() => {
      fn.apply(this, args); // 函数被防抖调用
    }, delay);
  };
};
