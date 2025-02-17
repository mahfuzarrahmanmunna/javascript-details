function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object') {
        return "Invalid"
    } else if (typeof f2 !== 'object') {
        return "Invalid"
    } 
    else if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true
    }
    else {
        return false
    }
}

// console.log(isBestFriend(
//     { name: "hashem", roll: 1, bestFriend: 15 },
//     { name: "kashem", roll: 15, bestFriend: 1 }

// ))