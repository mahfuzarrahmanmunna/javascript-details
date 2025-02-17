function checkDigitsInName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    // Use a regular expression to check for digits in the name
    return /\d/.test(name);
}

// Test cases
console.log(checkDigitsInName("Raj123")); // true
console.log(checkDigitsInName("n9ayeem")); // true
console.log(checkDigitsInName("e1mu3")); // true
console.log(checkDigitsInName("Suman")); // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#")); // false
console.log(checkDigitsInName(["Raj"])); // Invalid Input
