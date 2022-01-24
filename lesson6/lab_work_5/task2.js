let summ = 0;
for (let i = 2; i < process.argv.length; i++) {
    summ += +process.argv[i];
}
console.log (summ);
