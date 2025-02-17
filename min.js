const price = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function minNumber(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
        if (num < min) {
            min = num
        }
    }
    return min
}
let first = minNumber(price);
console.log('Minimum number is', first)