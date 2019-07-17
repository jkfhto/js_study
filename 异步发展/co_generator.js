const fs = require('fs');
const path = require('path');
const co = require('co');
const util = require('util');
const readAsync = util.promisify(fs.readFile)

const filePath = path.resolve(__dirname, './1.txt');

co(function* makeIterator() {
    try {
        const path1 = yield readAsync(filePath);
        console.log("path1：" + path1.toString());
        const data = yield readAsync(path.resolve(__dirname, path1.toString()));
        console.log("data：" + JSON.stringify(data.toString()));
    } catch (e) {
        console.error("出错了：" + e)
    }
})

//co简单实现 递归调用
function myCo(generator){

    const iterator = generator();
    //返回一个promise
    return new Promise((resolve,reject)=>{

        function onFulfilled(res){
            var ret;
            try {
                //返回一个对象 done：b表示是否迭代玩 value：promise实例
                ret = iterator.next(res);
            } catch (e) {
                return reject(e);
            }
            next(ret);
        }

        function onRejected(err) {
            var ret;
            try {
                ret = gen.throw(err);
            } catch (e) {
                return reject(e);
            }
            next(ret);
        }
        
        //初始化
        onFulfilled();
        function next(ret){
            if (ret.done) return resolve(ret.value);
            //递归调用 实现异步逻辑
            ret.value.then(onFulfilled, onRejected);
        }
    })
}

myCo(function* makeIterator() {
    try {
        const path1 = yield readAsync(filePath);
        console.log("path1：" + path1.toString());
        const data = yield readAsync(path.resolve(__dirname, path1.toString()));
        console.log("data：" + JSON.stringify(data.toString()));
    } catch (e) {
        console.error("出错了：" + e)
    }
})