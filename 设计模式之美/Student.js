import {Person} from './Person.js'
class Student  extends Person {
    constructor(name,age) {
        super(name,age);
    }
}


const zhangsan = new Student('张三', 12);
zhangsan.sayHello();
