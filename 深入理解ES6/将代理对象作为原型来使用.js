const target = {};


const newTarget = Object.create(new Proxy(target, {
    get(target, key, receiver) {
        console.log(`${key} does not exist`);
    },
    defineProperty(target, key, value) {
        return false;
    }
}));


Object.defineProperty(newTarget, 'name', {
    value: '张三'
});

newTarget.age = 100;
console.log(newTarget.name);
// console.log(newTarget.hasOwnProperty('name'));
console.log(newTarget.age);
