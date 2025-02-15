/**
 * func takes an array as parameter
 * give me the average of the odd numbers in the array
 */
function oddAverage(numbers) {
    let odds = []
    for (let number of numbers) {
        if (number % 2 !== 0) {
            odds.push(number)
        }
    }
    // console.log(odds)
    let sum = 0
    for (const number of odds) {
        sum += number

    }
    let count = odds.length
    console.log(sum / count)
}
const numbers = [45, 2, 15, 46, 3, 54, 22, 54, 45, 54]
let avg = oddAverage(numbers)
console.log("Average of odd number is", avg)