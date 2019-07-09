/**
 * 核心 面向切片编程AOP
 * AOP (装饰模式)
 * AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，其实就是给原函数增加一层，不用管原函数内部实现
 * 
 */
const methods = ['push', 'pop', 'shift'];

//继承原型的方法以及属性
let proto = Object.create(Array.prototype);

for (let method of methods) {
    //重写数组方法
    proto[method] = function () {
        //调用原有的逻辑
        console.log('触发新的逻辑')
        Array.prototype[method].call(this, ...arguments);
    }
}

const arr = [];
arr.__proto__ = proto;
arr.push(1);
console.log(arr)