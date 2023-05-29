# throttle()

> 节流是指在一段时间内只执行一次回调函数。如果在这段时间内事件被触发多次，那么只有第一次触发事件时才会执行一次回调，后续的事件都会被忽略。节流也可以减少函数的执行次数，以达到减少性能消耗的目的，同时它还能保证回调函数至少被执行一次，避免因过度限制而造成功能缺失的问题。

```js
/**
 * 函数节流
 * @param {Function} fn 需要节流的函数
 * @param {number} delay 节流时间(ms)
 * @returns {Function} 包装后的节流函数
 */
function throttle(fn, delay = 500) {
  let lastTime = 0; // 定义上次执行函数的时间戳

  return function (...args) {
    const now = +new Date(); // 获取当前时间戳
    if (now - lastTime >= delay) {
      fn.apply(this, args); // 函数被节流调用
      lastTime = now; // 更新lastTime
    }
  };
}

// 示例
function fn() {
  console.log("函数被调用了");
}

// 节流
const throttledFn = throttle(fn, 500);
throttledFn();
throttledFn();
throttledFn(); // 当前时间-上次调用的时间 >= 500ms才会执行函数
```

使用方法：将以上代码复制粘贴到您的 js 代码中，并调用`throttle`函数即可。参数 1 必须要传递一个函数，参数 2 是可选的，表示延迟时间，默认为 500ms。 调用函数后，它会返回一个包装后的新函数，可以在需要的时候调用它。节流函数则会在一定的时间内（参数 2），只执行一次函数，而忽略在这段时间内的其他调用，直到一段时间后才会执行下一次。
