const fs = require('fs');
const path = require('path');
const util = require('util');
const readAsync = util.promisify(fs.readFile)

const filePath = path.resolve(__dirname, './1.txt');

//使用async关键字，你可以轻松地达成之前使用生成器和co函数所做到的工作
async function readFileAsync(url) {
    try {
        const path1 = await readAsync(url);
        console.log("path1：" + path1.toString());
        const data = await readAsync(path.resolve(__dirname, path1.toString()));
        console.log("data：" + JSON.stringify(data.toString()));
    } catch (e) {
        console.error(e);
    }
}

readFileAsync(filePath)