// singleton
// object.create

// object literal
const mySym = Symbol("key1")

const JsUser = {
    name : "Shakshi",
    "full name" : "Shakshi Kumari",
    [mySym] : "mykey1" , //to use it as symbol otherwise it will act as string
    age : 21,
    location : "hamirpur",
    email : "hfdsyjyf@gmsol.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "shakshi@google.com"
// Object.freeze(JsUser)
// JsUser.email = "shakshi@google.com"

// console.log(JsUser["email"]);
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
