/**
 * 函数节流
 * @param {Function} fn 需要节流的函数
 * @param {number} delay 节流时间(ms)
 * @returns {Function} 包装后的节流函数
 */
export const throttle = (fn, delay = 500) => {
  let lastTime = 0; // 定义上次执行函数的时间戳

  return function (...args) {
    const now = +new Date(); // 获取当前时间戳
    if (now - lastTime >= delay) {
      fn.apply(this, args); // 函数被节流调用
      lastTime = now; // 更新lastTime
    }
  };
};
