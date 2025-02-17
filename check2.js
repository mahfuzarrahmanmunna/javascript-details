function calculateWatchTime(watchTimes) {
    // Check if all elements in the array are numbers
    if (!Array.isArray(watchTimes) || watchTimes.some(time => typeof time !== 'number')) {
        return "Invalid";
    }

    // Calculate total watch time in seconds
    const totalSeconds = watchTimes.reduce((acc, cur) => acc + cur, 0);

    // Convert to hours, minutes, and seconds
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;

    // Return the result as an object
    return { hour, minute, second };
}

// Example usage:
const watchTimes = [3600, 1800, 5400, 7200];
console.log(calculateWatchTime(watchTimes));
