function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0) {
        return "Invalid Input"
    } else if (typeof income !== 'number' || typeof expenses !== 'number') {
        return "Invalid Input"
    } else if (income < expenses) {
        return "Invalid Input"
    }
    let taxableAmount = income - expenses;
    // console.log(taxableAmount)
    let tax = taxableAmount * 0.2
    // console.log(tax)
    return tax
}
let first = calculateTax(10000, 100)
console.log(first)