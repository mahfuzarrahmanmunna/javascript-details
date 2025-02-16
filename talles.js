function tollHeight(number) {
    let max = number[0];
    for (let num of number) {
        if (num > max) {
            max = num;
        }
    }
    return max
}

let heights = [65, 66, 68, 72, 78, 60, 65]
let unique = tollHeight(heights)
console.log('max number is : ', unique)