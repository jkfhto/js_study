//数组的flat 扁平化一个数组

let arr = [1, [2, [3, [4, [5, [6]]]]]];

function flatten(arr){
    return arr.reduce((previousValue, currentValue, currentIndex)=>{
        // console.log(previousValue, currentValue, currentIndex);
        if (Array.isArray(currentValue)){
            //递归实现扁平化 将当前项与后面扁平化的结果拼接起来
            previousValue = previousValue.concat(flatten(currentValue));
        }else{
            previousValue.push(currentValue);
        }
        return previousValue;
    },[])
}

console.log(flatten(arr));
//console.log(arr.toString().split(','))