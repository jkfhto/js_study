function deepClone(obj,hash = new WeakMap()){
    //避免引用循环 比较对象与对象属性是否相等
    // if (obj === parent) return parent;
    //处理null undefined
    if (obj == null) return obj;
    //处理string boolean number
    if (typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new Date(RegExp);
    if(hash.has(obj)){
        return hash.get(obj);
    }
    //处理 array object
    let instance = new obj.constructor();
    hash.set(obj, instance)
    for(var key in obj){
        //递归实现深拷贝
        if (obj.hasOwnProperty(key)){
            instance[key] = deepClone(obj[key], hash);
            // instance[key] = deepClone(obj[key], obj);
        }
       
    }
    return instance;
}

var obj = {
    a: 2,
};
obj.b = obj;
var cloneObj = deepClone(obj);
console.log(cloneObj === obj, cloneObj)