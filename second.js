function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email"
    }
    let splitEmail = email.split("@");
    let userName = splitEmail[0]
    let domainName = splitEmail[1]
    let finalEmail = `${userName} sent you an email from ${domainName}`
    return finalEmail
}
let first = sendNotification('rahman@gmail.com')
console.log(first)