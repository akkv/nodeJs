let testArr = [
    { name: 'Sasha', age: 30 },
    { name: 'Ivan', age: 24 },
    { name: 'Petr', age: 36 },
];
function createCompareFunctionByParam(field) {
    return function (a, b) {
        if (typeof a[field] == 'number') {
            return a[field] - b[field];
        } else {
            return a[field].localeCompare(b[field]);
        }
    };
}
testArr.sort(createCompareFunctionByParam('name'));
console.log(testArr);
