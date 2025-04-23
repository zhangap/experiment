const p1 = new Promise((resolve, reject) => {
    const time = Number.parseInt(Math.random() * 1000);
    setTimeout(() => {
        resolve('p1先执行')
    }, time)
});

const p2 = new Promise((resolve, reject) => {
    const time = Number.parseInt(Math.random() * 1000);
    setTimeout(() => {
        resolve('p2先执行')
    }, time)
});

//多次执行，会发现每次打印的都不一样
//p1和p2，哪个先执行，所返回的Promise就会立刻被解决
Promise.race([p1, p2]).then(value => {
    console.log(value);
});


console.log('例子2--------');

const p3 = new Promise((resolve, reject) => {
    resolve('p3');
});
const p4 = new Promise((resolve, reject) => {
    reject('p4');
})
const p5 = new Promise((resolve, reject) => {
    resolve('p5');
});
const p6 = Promise.reject('p6');

Promise.race([p3, p4, p5, p6]).then(value => {
    console.log(`then:${value}`)
}).catch(err => {
    console.log(`error:${err}`);
})
