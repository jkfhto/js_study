const data = [1, 2, 3, 4].reduce((previousValue, currentValue, currentIndex, array) => {
    console.log(previousValue, currentValue, currentIndex, array);
    return previousValue + currentValue;
}, 100)

console.log(data);

//实现reduce方法
Array.prototype.myReduce = function (callback, previousValue) {
    for (var i = 0; i < this.length; i++) {
        if (!previousValue) {
            previousValue = callback(this[i], this[i + 1], i + 1, this);
            i++;//第一次循环了两个变量，下次应该从第三个执行，所以向后移动一位
        } else {
            previousValue = callback(previousValue, this[i], i, this);
        }
    }
    return previousValue;
}

const data2 = [1, 2, 3, 4].myReduce((previousValue, currentValue, currentIndex, array) => {
    console.log(previousValue, currentValue, currentIndex, array);
    return previousValue + currentValue;
}, 100)
console.log(data2);