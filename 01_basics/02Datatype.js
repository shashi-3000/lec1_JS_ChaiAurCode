console.log("we are learning datatypes");
"use strict" // treat all JS code as newer version
//alert(3+3); // this will give error as "alert is not defined" under Node -> in browser it doesnt but here it does..

//numbers -> 2 to power 35
//bigint
//string
//boolean
//symbol
//object
//undefined

//-------------------------------------------------------------------------------------
// lec 6 -> DATA CONVERSION CONFUSION

let score= "33";
console.log(typeof score);
let valueInScore = Number(score); // typecasting -> remember 'N' will be capital
console.log(typeof valueInScore);
