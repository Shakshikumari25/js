//IF STATEMENT

// if(true){

// }

// if(2 === 2){
//     console.log("Helloo");
// }

// if(false){
//     //not executed if condition not satisfied
// }

// if(2 !== "2"){
//     console.log("hiii");
// }

// const temp = 45

// if(temp <= 48){
//     console.log("very hot");
// }else{
//     console.log("don't know");
// }


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

const balance = 1000

// if(balance > 500) console.log("I'm a rich baddie");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1100");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("Allowed to shop");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}
