const prompt = require("prompt-sync")();

let a;
let b;

let c = prompt("Enter an operator: +, -, *, / : ");

a = Number(prompt("Enter first number: "));
b = Number(prompt("Enter second number: "));

switch(c){
    case "+":
        console.log("Addition answer is:", a + b);
        break;
    case "-":
        console.log("Subtraction answer is:", a - b);
        break;
    case "*":
        console.log("Multiplication answer is:", a * b);
        break;
    case "/":
        console.log("Division answer is:", a / b);
        break;
    default:
        console.log("Invalid operator");
}