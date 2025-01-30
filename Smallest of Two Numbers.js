Find the Smallest of Two Numbers .Write a function findSmaller that takes two numbers as parameters and returns the smaller number.*/


let num21 = parseInt(prompt("Enter First Number:"));
let num22 = parseInt(prompt("Enter Second Number:"));

 let findSmaller = (t, u) => {
     return (t < u) ? t : u; 
}

console.log(`The Smaller Number Between ${num21} and ${num22} is: ${findSmaller(num21, num22)}`);
