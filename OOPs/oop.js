const user = {
    username: "Shakshi",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from Database");
        // console.log(`username is ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.signedIn)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("Shakshi", 18, false);
//if we will make userTwo it will overwrite userOne and it will create problem
// so to avoid this we use new keyword everytime we make use of function
// new keyword call the constructor function

const userOne = new User("Shakshi", 12, true);
const userTwo = new User("Kriti", 7, false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);