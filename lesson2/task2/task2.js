// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
// function* generateAlphaNum() {
//     yield* generateSequence(48, 57); // 0..9
//     yield* generateSequence(65, 90); // A..Z
//     yield* generateSequence(97, 122); // a..z
// }
// let symbols = '';

// for (let code of generateAlphaNum()) {
//     symbols += String.fromCharCode(code);
// }

// function pswdGenerator (length) {
//     let pswd = '';
//     for (let i = 0; i < length; i++) {
//         pswd += symbols.charAt(Math.floor(Math.random()*symbols.length))
//     }
//     return pswd;
// }
// console.log(pswdGenerator(20))

function giveMePswrd(length) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let pswrd = '';
    function* generateSequence() {
        for (let i = 0; i < length; i++) {
            yield symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }
    for (let code of generateSequence(length)) {
        pswrd += code;
    }
    return pswrd;
}
console.log(giveMePswrd(20))
// Мы можем сформировать строку символов с помощью генератора, но не совсем понимаю зачем это нужно
// Или случайный пароль нужно отдать с помощью генератора?
// Чем это будет лучше?
