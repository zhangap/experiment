console.log('Array.of方法');

let items = Array.of(1, 2, '3', '4');
console.log(items.length);
console.log(items);

console.log('Array.from()方法');

function translate() {
    console.log(arguments);
    return Array.from(arguments, value => value + 1)
}


items = Array.from({length: 3, 0: 'a', 1: 'b', 2: 'c'});
console.log(items);
console.log(translate('a', 'b', 'c', 'd'));

console.log('fill方法');
items.length = 10;
items.fill('默认值');
items.fill('第二个值被修正', 1,2);
console.log(items);
