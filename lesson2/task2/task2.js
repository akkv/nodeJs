let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function pswdGenerator (length) {
    let pswd = '';
    for (let i = 0; i < length; i++) {
        pswd += symbols.charAt(Math.floor(Math.random()*symbols.length))
    }
    return pswd;
}
console.log(pswdGenerator(20))