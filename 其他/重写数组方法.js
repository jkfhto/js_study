/**
 * 核心 面向切片编程aop
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