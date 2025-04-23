// 在 ES6 中派生类的最强大能力，或许就是能够从表达式中派生类。只要一个表达式能够返回 一个具有 [[Construct]] 属性以及原型的函数，你就可以对其使用 extends

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}


class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

const square = new Square(5);
console.log(square.getArea());
console.log(square instanceof  Rectangle);
