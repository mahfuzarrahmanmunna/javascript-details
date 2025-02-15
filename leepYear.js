/***
 * Year will be leap year if the year is divisible by 4
 */

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true
        } else {
            return false
        }
        return true

    } else {
        return false
    }
}
const isLipi = isLeapYear(2000)
console.log(isLipi)
/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4: then it will be a leap year
 */

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isLeapYear2(2000))

function isLeapYear3(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isLeapYear3(2000))