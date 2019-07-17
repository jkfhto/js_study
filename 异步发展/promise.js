const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './1.txt');

//promise
function readFileAsync(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const url = path.resolve(__dirname, data.toString());
                fs.readFile(url, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data.toString());
                    }
                })
            }
        })
    })
}

// readFileAsync(filePath)
//     .then((data) => {
//         console.log(data)
//     }).catch(err=>{
//         console.error(err);
//     })

const util = require('util');

util.promisify(fs.readFile)(filePath)
    .then(data => {
        return util.promisify(fs.readFile)(path.resolve(__dirname, data.toString()))
    }).then(data => {
        console.log(data.toString())
    }).catch(err => {
        console.error("出错了：" + err);
    })