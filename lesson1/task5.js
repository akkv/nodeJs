// 2*. Требуется реализовать декоратор с параметрами returnObject,
// который в случае, если функция возвращает массив, подменяет
// его объектом. Имена задаются в параметрах декоратора. Декоратор
// универсальный, количество имен переменное.
function returnObject(func, ...args) {
    return function () {
        let obj = {};
        let result = func.apply(this, arguments);

        if (typeof result === 'string' || typeof result === 'number') {
            obj[args[0]] = result;
            return obj;
        }
        if (result.length === args.length) {
            for (let i = 0; i < args.length; i++) {
                obj[args[i]] = result[i];
            }
            return obj;
        }
        console.log('Колличество данных не совпадает!');
        return;
    };
}

function func(a, b, c) {
    return [a, b, c];
}
let funcForThree = returnObject(func, 'a','b','c');
let x = funcForThree(3, 5, 6);
console.log(x);