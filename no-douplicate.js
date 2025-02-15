function noDuplicate(arr) {
    let unique = []
    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item)
        }
    }
    console.log(unique)
}
const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'kabul', 'cabul']
const uniqueArray = noDuplicate(biriyaniKhor)
console.log(uniqueArray)