function celsiusToFahrenheit(celsius) {
    let convert = ((celsius * (9 / 5)) + 32);
    let convertNumber = parseInt(convert)
    return convertNumber
}
let first = celsiusToFahrenheit(3)
console.log(first)