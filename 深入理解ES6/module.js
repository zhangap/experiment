console.log('ES6中的模块');

const fn1 = (value) => value;


export const  Constat = {
    maxTimeout: 3000
};

export {
    fn1,
    sum as add
}


export let innerName = '模块内部变量';

export const setInnerName = (name) => {
    innerName = name;
}
//
// setInterval(()=> {
//     console.log(`监测内部变量innerName的值：${innerName}`);
// },3000)


function sum(num1, num2) {
    return num1 + num2;
}

