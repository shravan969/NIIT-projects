let name = 'jhony'
let a;
let b;

a = 20;
b = 10;



console.log("addition ans is :", a + b)
console.log("substraction ans is :", a - b)
console.log("multiplication ans is :", a * b)
console.log("divsion ans is :", a / b)
console.log("power ans is :", a ** b);





age = 55;


if (age <= 18) {
    console.log("small boy")
} else if (age > 18 && age < 50) {
    console.log("big  boy")
} else {
    console.log("very big boy")

}




for (num = 2; num <= 10; i++) {

    if (num % 2 == 0) {
        console.log("even number")
    } else {
        console.log("odd number")
    }
}

__________________________________________________________________________________

year = 1950;

for (i = 1950; i <= 2026; i++) {
    if (i % 4 == 0) {
        console.log(i, "is leap year")
    } else {
        console.log(i, "not a leap year")
    }
}

________________________________________________________________________________

for (i = 1; i <= 10; i++) {
    console.log(i)
}
__________________________________________________________________________

for (i = 10; i >= 1; i--) {
    console.log(i)
    if (i == 4) {
        console.log("here is break")
        break         // break
    }
}

_________________________________________________________________________

sum = 0

for (i = 1; i <= 10; i++) {
    sum = sum + i
    console.log(sum)
}
________________________________________________________________________________
fact = 1

for (i = 1; i <= 5; i++) {
    fact = fact * i
    console.log(fact)
}
________________________________________________________________________

rev = 0
num = 12345

while (num > 0) {
    rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num / 10)
}
console.log("reverse number is :", rev)

_______________________________________________________________________________



rev = 0
num = 1234

for (i = num; i > 0; i = Math.floor(i / 10)){

    let rem = i % 10
    rev = rev * 10 + rem
    console.log("reverse number is :", rev)
}
