const uid = Symbol.for('uid');
const name = Symbol.for('name');
const age = Symbol.for('age');


export const customPerson = {
    [uid]: '12345',
    [name]: '张三',
    [age]: 100,
}

console.log(Symbol.keyFor(uid))
console.log(Symbol.keyFor(age))
//object.keys和getOwnPropertyNames无法返回符号类型的属性
console.log(Object.keys(customPerson), Object.getOwnPropertyNames(customPerson));
//Object.getOwnPropertySymbols() 方法，以便让你可以检索对象的符号类型属性。
console.log(Object.getOwnPropertySymbols(customPerson));
