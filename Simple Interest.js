/*Calculate the Simple Interest
Write a function simpleInterest that takes principal, rate, and time as parameters and returns the calculated interest.*/



let num18 = parseInt(prompt("Enter the principle: "));
let num19 = parseInt(prompt("Enter the Rate: "));
let num20 = parseInt(prompt("Enter the Time: "));

let simpleInterest=(q,r,s)=>{
     return (q*r*s)/100;
     }
console.log(`Simple Interest Is: ${simpleInterest(num18,num19,num20)}`);
