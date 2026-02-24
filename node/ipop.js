const process = require('node:process');

let name =  process.argv[2];
console.log("hello ",name);



________________________

const prompt = require("prompt-sync")

let name = prompt("Enter your name: ")

console.log("Hello",name);

___________________________________________________

let n=prompt("Enter your number: ");
n = parseInt(n);

for(let i =1; i<=n; i++){
    console.log(i);
}


____________________________________________________


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

____________________________________________________________________


const prompt = require("prompt-sync")();
let a = prompt("Enter a number:  ");

function square(n){
console.log(n*n);
}
a = parseInt(a);
square(a);

_______________________________________________________________________

let n = prompt("Enter a number: ");
n = parseInt(n);

function isprime(n){
if(n<=1)
    return false;
for(let i=2; i<=Math.sqrt(n); i++){ 
    if(n%i==0)
        return false;
}
return true;
}
isprime(n) ? console.log(n,"is a prime number") 

____________________________________________________________________

const greet = function(name){
    console.log("Hello",name);
}
greet("Alice");

____________________________________________________________________


const multiply =function(a,b){
    return a*b;
}
console.log(multiply(5,10));

____________________________________________________________________

function login(username,password){
 if(username=="admin" && password=="password"){   
    console.log("Login successful");
    }
    else{
        console.log("Login failed");
    }

    login("admin","password");
    login("user","1234");
    login("admin","1234");

    _______________________________________________________________________

 


    function orderfood(item , callback){
            console.log("Order placed for",item);
            setTimeout(())
              console.log(item,"is ready");
            callback();
    }




    _______________________________________________________________________


    function reqAge(age){
        if(age>=18){
            console.log("You are eligible to job");

    }else{
        console.log("You are not eligible to job");
    }
}

reqAge(20);