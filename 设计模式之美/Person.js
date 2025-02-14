export class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello EveryOne, My name is ${this.name}, I'm ${this.age} years old`);
    }
}

