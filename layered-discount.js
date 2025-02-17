/**
 * first 100 --> 100$
 * 101 to 200 --> 90$
 * above 200 --> 70
 */

function layeredDiscounted(quantity) {
    let first100Price = 100;
    let second100price = 90;
    let above200pPrice = 70;

    if (quantity <= 100) {
        let total = quantity * first100Price;
        return total
    } else if (quantity <= 200) {
        let first100Total = quantity * first100Price;
        let remainingQuantity = quantity - 100;
        let remainingTotal = remainingQuantity * second100price;
        let total = first100Total + remainingTotal
        return total
    } else {
        let first100Total = quantity * first100Price;
        let second100Total = 100 * second100price;
        let remainingQuantity = quantity - 200
        let remainingTotal = remainingQuantity * above200pPrice;
        let total = first100Total + second100Total + remainingTotal;
        return total
    }
}
console.log(layeredDiscounted(1250))