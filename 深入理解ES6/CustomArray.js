console.log('模块中的顶级作用于this',this);
function toUint32(value) {
    return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
}

function isArrayIndex(key) {
    let numericKey = toUint32(key);
    return String(numericKey) === String(key) && numericKey < (Math.pow(2, 32) - 1);
}


class CustomArray {
    constructor(length = 0) {
        this.length = length;

        return new Proxy(this, {
            set(target, key, value) {
                let currentLength = Reflect.get(target, 'length');
                if (isArrayIndex(key)) {
                    let numericKey = Number(key);
                    if (numericKey >= currentLength) {
                        Reflect.set(target, 'length', numericKey + 1);
                    }
                } else if (key === 'length') {
                    if (value < currentLength) {
                        for (let index = currentLength - 1; index >= value; index--) {
                            Reflect.deleteProperty(target, index);
                        }
                    }
                }
                // 无论什么类型，都要执行此代码
                return Reflect.set(target, key, value);
            }
        })
    }
}

debugger;
const colors = new CustomArray(3);
console.log(colors instanceof CustomArray);
console.log(colors.length);

colors[0] = 'green';
colors[1] = 'red';
colors[2] = 'blue';
colors[5] = 'yellow';
console.log(colors);
colors.length = 2;
console.log(colors);

