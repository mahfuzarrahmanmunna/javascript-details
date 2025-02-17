function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid"
    }
    else if (email[0] === "." || email[0] === '-' || email[0] === '+' || email[0] === '@') {
        return false;
    }
    else if (email.includes(' ')) {
        return false
    }
    else if (!email.includes('@')) {
        return false
    }
    else if (!email.endsWith('.com')) {
        return false
    }
    else {
        return true
    }
}
console.log(validEmail("@programming-he@ro.com"))