const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Xoami', price: 12000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 18000, camera: '12mp', color: 'black'},
]
function getCheapestPhone(phones) {
    // console.log(phones)
    let min = phones[0];
    for (const phone of phones) {
        // console.log(phone)
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min
}
const cheap = getCheapestPhone(mobiles)
console.log('Cheapest Phone is: ', cheap)


// Task--2

function getHighPrices(phones) {
    let max = phones[0];
    for (let phone of phones) {
        if (phone.price > max.price) {
            max = phone
        }
    }
    return max
}
const maximum = getHighPrices(mobiles);
console.log('Highest price in this array:   ',maximum)