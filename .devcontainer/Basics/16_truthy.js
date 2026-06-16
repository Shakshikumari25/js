// const userEmail = "shakshi@google.com"

// if(userEmail){
//     console.log("User's email verified");
// }else{
//     console.log("user's email is not verified");
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = []

if(userEmail.length === 0){
    console.log("Array is email");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary operator

// condition ? true : false

const marks = 78

marks == 79 ? console.log("True") : console.log("false")