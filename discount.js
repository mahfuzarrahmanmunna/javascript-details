/**
 * upto 100: --> per price 100$
 * more then 100-200: --> per price 90$
 * more then 200: --> per price 70$
 */

function discountedPrice(quantity) {
    if (quantity <= 100) {
        let total = quantity * 100;
        return total
    }
    else if (quantity <= 200) {
        let total = quantity * 90;
        return total
    }
    let total = quantity * 70;
    return total
}
let total = discountedPrice(5);
console.log(total)