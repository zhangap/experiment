import {open} from 'node:fs/promises';

//模拟读取文件的方法
function readFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('文件读取完成');
            resolve(true);
        }, 3000)
    })
}

let promise = open('./MyArray.js');
// const promise = readFile();
console.log(promise);
//
// setTimeout(() => {
//     promise.then((result) => {
//         console.log(result);
//     })
// }, 5000);


promise = new Promise(resolve => {
    console.log('Promise函数被执行。。。')
    resolve();
});

promise.then(() => {
    console.log('Resolved...')
});
console.log('HI...');

console.log('开始...')
promise = Promise.resolve(222);
promise.then((res) => {
    console.log(res);
});
console.log('结束....');


promise = new Promise((resolve, reject) => {
    try {
        //此处会抛出异常
        let res = a + b;
        resolve(res);
    } catch (err) {
        reject(err);
    }
});


// promise.then(() => {
//     console.log('then函数被执行。。。')
// }).catch((err) => {
//     console.log('catch函数被执行。。。')
//     console.error(err)
// });


let rejected;

process.on('unhandledRejection', reason => {
    console.log('unhandledRejection被执行', reason.message)
});

rejected = Promise.reject(new Error('自定义异常'));

setTimeout(() => {
    rejected.catch(() => {
        console.log('异常被捕获')
    })
}, 4000);


let p1 = new Promise((resolve, reject) => {
    resolve(2);
});

p1.then(value => {
    console.log(value);
    throw new Error('Boom!')
}).catch(err => {
    console.log(err.message);
});


p1.then(value => {
    return value + 1;
}).then(value => {
    return value + 1;
}).then(value => {
    console.log(`最终结果value=${value}`)
})


p1 = new Promise((resolve, reject) => {
    resolve(43);
});
let p2 = new Promise((resolve, reject) => {
    reject(43);
});

p1.then(value => {
    console.log('第一个then函数执行', value);
    return p2;
}).catch(err => {
    console.log('第一个catch函数执行...', err);
})
