//生成器
function* makeIterator(arr) {
    for (var i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const arr = ['步骤1', '步骤2', '步骤3'];

const it = makeIterator(arr);//产生一个迭代器 简化迭代器的创建过程
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());