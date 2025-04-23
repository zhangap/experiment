// MyArray继承了Array,因此工作方式与正规数组一致
//任意能返回内置对象实例的方法，在派生类上都会自动返回派生类的实例
class MyArray extends Array {

}

const colors = new MyArray();
colors.push('blue');
colors.push('green');
colors.push('red');
console.log(colors);
console.log(colors.length);
const subItems = colors.slice(0, 2);
console.log(subItems, colors);
colors.length = 0;
console.log(colors);


console.log('例子2')

class MyClass {
    static get [Symbol.species]() {
        return this;
    }

    constructor(value) {
        this.value = value;
    }

    clone() {
        return new this.constructor[Symbol.species](this.value);
    }
}

class MyDerivedClass1 extends MyClass {

}

class MyDerivedClass2 extends MyClass {
    static get [Symbol.species]() {
        return MyClass
    }
}

const instance1 = new MyDerivedClass1('foo');
const clone1 = instance1.clone();
const instance2 = new MyDerivedClass2('bar');
const clone2 = instance2.clone();

console.log(clone1 instanceof MyClass);
console.log(clone1 instanceof MyDerivedClass1);
console.log(clone2 instanceof MyClass);
console.log(clone2 instanceof MyDerivedClass2);


console.log('在类构造器中使用 new.target')

class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target === Person)
    }

    sayHello() {
        console.log(`Hello ${this.name}!`);
    }
}

const p1 = new Person('岳飞');
p1.sayHello();

console.log('静态的基类.....');

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('此类不能被初始化')
        }
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}

// 此代码会报错
// const x = new Shape();
const y = new Rectangle(3,4);
console.log(y instanceof Rectangle);


