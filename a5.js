function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid"
    }
    let totalTime = 0;
    for (let i = 0; i < times.length; i++){
        if (typeof times[i] !== 'number') {
            return "Invalid"
        }
        totalTime += times[i]
    }
    let hour = Math.floor(totalTime / 3600)
    let minute = Math.floor((totalTime % 3600) / 60);
    let second = Math.floor(totalTime % 60)
    return { hour, minute, second}
}
console.log(calculateWatchTime([1000, 2000, 725]))