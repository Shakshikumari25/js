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

// console.log(loginUserMsg("Shakshi"));
// console.log(loginUserMsg(""));
// console.log(loginUserMsg());

function loginUserMsg(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Shakshi"));
// console.log(loginUserMsg(""));
// console.log(loginUserMsg());


function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(2, 200, 400, 700));

const user = {
    userName: "shakshi",
    price: 300
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and the price is ${anyObject.price}`)
}

// handleObject(user);

handleObject({
    userName: "Kriti",
    price: 599
})

const myNewArray = [200,400,100,600]

function getSecondVal(getArray){
    return getArray[1]
}

// console.log(getSecondVal(myNewArray));
console.log(getSecondVal([200,400,100,600]));
