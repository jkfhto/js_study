# 异步发展

所谓"异步"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。

异步编程的语法目标，就是怎样让它更像同步编程,有以下几种：

- 回调函数
- 事件监听
- 发布/订阅
- Promise 对象
- Async/Await

## 回调的问题

- 不能使用try catch处理异常
- 回调地狱 多级嵌套，代码难以阅读和维护

## 异步流程解决方案

- 发布/订阅：订阅事件实现了一个事件与多个回调函数的关联
- [Promise](./promise.js)
- [生成器Generators + co](./co_generator.js)
  - [生成器Generators/ yield](./iterator.js)
    - [迭代器iterator](./iterator.js)
  - [co](https://github.com/tj/co)
- [Async/Await](./async.js)
