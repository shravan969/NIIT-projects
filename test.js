

_________________________________________________________________________

const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
n = parseInt(n);
 let x= 100;

 let j =1;
 for(let i =1; i<=n; i++){
    console.log(x);
    let a = j*i;

    x=x-a;
}
_________________________________________________________________________

let m ;
let z=500;

for (let i = 1 ; i<=10;i++){
     console.log(z);
    let a  = i**3;
    z = z-a;
    
}

_________________________________________________________________________

let x = "*";
  
console.log(x);
for (let i = 1; i <= 5; i++) {
   let row = "";

     console.log(x);
    x = x+ "*";
}


___________________________________________________________________________


let n = 5;

for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


_________________________________________________________________________

let n = 5;
let star = " * ";
let space = "  ";

for(let i =1; i<=n; i++){
let row= " ";

     for(let j =1; j<=n-i; j++){
            row = row + space;
     }

     for(let k =1; k<=i; k++){
            row = row + star;
     }
     console.log(row);
}

_________________________________________________________________________

let n = 5;
let star = " * ";
let space = "  ";

for(let i =5;i>=n;i--){
     let row= " ";

     for(let j=5;j>=i;j--){
            row = row + space;
     }

     for(let k =1;k<=i;k++){
            row = row + star;
     }
     console.log(row);
}