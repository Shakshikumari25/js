function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("i");    
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1+number2);
    return (number1+number2) //better than console.log()
}

// addTwoNumbers(34,22)

const res = addTwoNumbers(23,45)

// console.log(res);

function loginUserMsg(username){
    return `${username} just logged in`
}

console.log(loginUserMsg("Shakshi"));
console.log(loginUserMsg(""));
console.log(loginUserMsg());

function loginUserMsg(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Shakshi"));
console.log(loginUserMsg(""));
console.log(loginUserMsg());
