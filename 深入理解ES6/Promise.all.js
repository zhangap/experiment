let p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('p1');
    },1000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('p2');
        //若传递给Promise.all的任意promise被拒绝了，那么方法所返回的Promise就会立刻被拒绝，而不必等待其他的promise结束
        reject('error');
    },2000)
});


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3');
    },5000)
});

console.log('开始执行...');
const startTime = Date.now();
Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
    console.log(`耗时:${Date.now() - startTime}`);
})


