var obj = {};
var val = '12';

Object.defineProperty(obj, 'name', {
    enumerable: true,//默认不可枚举
    configurable: true, //默认不可删除
    // writable: false, //默认为false writable不能和get，set一起使用 一般搭配value使用
    // value: 1
    get() {
        return val;
    },
    set(value) {
        val = value;
    }
})

console.log(obj)
delete obj.name;
console.log(obj)
obj.name = '1334'
console.log(obj)
