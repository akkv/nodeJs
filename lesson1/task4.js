// 1. Требуется реализовать декоратор с параметрами pause,
// который откладывает выполнение функции на указанное
// количество секунд. Пример использования:

function func() {
    console.log('Функция выполниться с задержкой в 2 секунды!');
}

function pause(func, s) {
    return function () {
        setTimeout(func, s * 1000);
    };
}

let paused = pause(func, 2);
paused();
