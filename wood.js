/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chair, table, bed) {
    let perChairWood = 3;
    let perTableWood = 10;
    let perBedWood = 50;

    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;


    const totalWood = allChairWood + allTableWood + allBedWood;

    return totalWood;
}
const wood = woodQuantity(5, 2, 2)
console.log('wood needed', wood)


// task
/**
 * Shirt price -- 500$
 * pant price --> 300$
 * shoe price --> 900$
 */
function clothTotalAmount(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 500;
    const perPantPrice = 300
    const perShoePrice = 900;

    const allShirtPrice = perShirtPrice * shirtQuantity;
    const allPantPrice = perPantPrice * pantQuantity;
    const allShoePrice = perShoePrice * shoeQuantity;

    const totalAmount = allShirtPrice + allPantPrice + allShoePrice;
    return totalAmount
}
const cloth = clothTotalAmount(12, 5, 3)
console.log(cloth)