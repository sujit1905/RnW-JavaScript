function calculator(a, b, op) {
    switch (op) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "div":
            return a / b;
        default:
            return "Invalid opration!";
    }
}
console.log(calculator(5, 2, "add"));
