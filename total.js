const products = [
    { name: 'Shampoo', price: 300 },
    { name: 'Chiruni', price: 100 },
    { name: 'Shirt', price: 700 },
    { name: 'Pant', price: 1200 },
]
function sumOfArrayIntoObject(products) {
    let sum = 0
    for (let product of products) {
        sum += product.price
    }
    return sum
}
const total = sumOfArrayIntoObject(products);
console.log('total price is :  ', total)