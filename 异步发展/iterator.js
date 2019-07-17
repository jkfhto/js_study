//迭代器
function makeIterator(arr) {
    let index = 0;
    return {
        next: () => {
            if (index < arr.length) {
                return { value: arr[index++], done: false }
            } else {
                return { value: undefined, done: true }
            }
        }
    }
}

const arr = ['步骤1', '步骤2', '步骤3'];

const it = makeIterator(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());