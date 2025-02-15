function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet)
    return feetNumber
}
const myHeight = inchToFeet(80)
console.log(myHeight)