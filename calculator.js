function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function calculator(a, b, operation) {
    if (operation === 'add') {
        let result = add(a, b);
        return result
    } else if(operation ==='subtract'){
        let result = subtract(a, b);
        return result
    } else if (operation === 'mul') {
        let result = mul(a, b);
        return result
    } else if (operation === 'div') {
        let result = div(a, b);
        return result
    }
    else {
        return "Only 'add', 'subtract', 'multiply', 'divide', operation is allowed"
    }
}

console.log(calculator(12, 12, 'add'))