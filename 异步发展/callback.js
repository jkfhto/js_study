const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './README.md');

//回调函数
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
})