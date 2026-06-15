const user = {
    username: "Shakshi",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to this website`);
        //this is used to refer current context
        console.log(this);
    }
}

// user.welcomeMsg()

// user.username = "Kriti"
// user.welcomeMsg()

// console.log(this); //here it is empty but in browser it is a window object


// function chai(){
//     let username = "Harshit"
//     console.log(this);
// }

// chai()

//syntax of arrow function- () => {}

// const chai = () => {  
//     let username = "Kriti"
//     // console.log(this.username);
//     console.log(this);
// }

// chai()


//arrow function
//EXPLICIT RETURN
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

//CURLY BRACES ME RETURN KEYWORD BUT NOT IN PARANTHESIS
// IMPLICIT RETURN
const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(89,90));

const printName = (username) => ({username: "Shakshi"})
console.log(printName("username"));
