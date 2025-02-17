function cashOut(money) {
    if (typeof money !== 'number' || money <= 0) {
        return "Invalid"
    }
    let cutAmount = money * 1.75 / 100;
    return cutAmount
}
console.log(cashOut(-5555))