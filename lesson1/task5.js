// 2*. Требуется реализовать декоратор с параметрами returnObject,
// который в случае, если функция возвращает массив, подменяет
// его объектом. Имена задаются в параметрах декоратора. Декоратор
// универсальный, количество имен переменное.

function returnObject(func, ...args) {
    let obj = {};
    if (typeof func() === 'string' || typeof func() === 'number') {
        obj[args[0]] = func();
        return obj;
    }
    if (func().length === args.length) {
        for (let i = 0; i < args.length; i++) {
            obj[args[i]] = func()[i];
        }
        return obj;
    }
	console.log('Колличество данных не совпадает!')
	return;
}

function func() {
    return [1, 2];
}

let r = returnObject(func, 'a', 'b');
console.log(r);
