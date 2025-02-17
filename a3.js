function electionResult(votes) {
    let totalMango = 0;
    let totalBanana = 0;
    if (!Array.isArray(votes)) {
        return 'Invalid';
    }
    for (let vote of votes) {
        if (vote === 'mango') {
            totalMango++
        }
        else if (vote === 'banana') {
            totalBanana++
        }
    }
    if (totalBanana > totalMango) {
        return "Banana"
    }
    else if (totalBanana < totalMango) {
        return "Mango"
    }
    else {
        return "Draw"
    }
}
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]))