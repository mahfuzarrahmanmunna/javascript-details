function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
        return '"Invalid"'
    }
    let cashOutCharge = money * (1.75 / 100)
    return cashOutCharge
}


function validEmail(email) {
    if (typeof email !== 'string') {
        return '"Invalid"'
    }
    else if (email[0] === '.' || email[0] === '-' || email[0] === '+' || email[0] === '@') {
        return false
    }
    if (!email.includes("@")) {
        return false
    }
    else if (email.includes(" ")) {
        return false
    }
    else if (!email.endsWith(".com")) {
        return false
    }
    else {
        return true
    }
}



function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return '"Invalid"'
    }
    let totalBanana = 0;
    let totalMango = 0;
    for (const vote of votes) {
        if (vote === 'banana') {
            totalBanana++
        }
        else if (vote === 'mango') {
            totalMango++
        }
    }
    if (totalBanana > totalMango) {
        return '"Banana"'
    }
    else if (totalBanana < totalMango) {
        return '"Mango"'
    }
    else {
        return '"Draw"'
    }
}




function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return '"Invalid"'
    }
    else if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true
    }
    else {
        return false
    }
}



function calculateWatchTime(times) {
    let totalTime = 0
    for (let i = 0; i < times.length; i++){
        if (typeof times[i] !== 'number') {
            return '"Invalid"'
        }
        totalTime += times[i]
    }
    let hour = Math.floor(totalTime / 3600)
    let minute = Math.floor((totalTime % 3600) / 60);
    let second = Math.floor(totalTime % 60)
    return { hour, minute, second }
}

