# debounce()

> 防抖是指在事件被触发后，等待一段时间再执行回调函数。如果在这段时间内又触发了同一个事件，那么再次等待一段时间，最后再执行回调。防抖常用于处理高频事件，比如浏览器的 resize 和 scroll 事件，以及按钮的点击事件等。防抖可以减少函数的调用次数，以达到减少性能消耗的目的。

```js
/**
 * 函数防抖
 * @param {Function} fn 需要防抖的函数
 * @param {number} delay 防抖时间(ms)
 * @returns {Function} 包装后的防抖函数
 */
function debounce(fn, delay = 500) {
  let timerId = null; // 定义一个计时器变量

  return function (...args) {
    // 每次函数被调用时，都清除前一个计时器
    clearTimeout(timerId);
    // 启动一个新的计时器
    timerId = setTimeout(() => {
      fn.apply(this, args); // 函数被防抖调用
    }, delay);
  };
}

// 示例
function fn() {
  console.log("函数被调用了");
}

// 防抖
const debouncedFn = debounce(fn, 500);
debouncedFn();
debouncedFn();
debouncedFn(); // 只有最后一个函数被调用
```

> 使用方法：将以上代码复制粘贴到您的 js 代码中，并调用`debounce`函数即可。参数 1 必须要传递一个函数，参数 2 是可选的，表示延迟时间，默认为 500ms。 调用函数后，它会返回一个包装后的新函数，可以在需要的时候调用它。防抖函数会在最后一次调用之后等待一定的时间（参数 2），如果这段时间内再次调用函数会被忽略。
