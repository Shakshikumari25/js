// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}def`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "cdjsdd.com", "789")

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername());


//ALTERNATE WAY

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}def`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new User("chai", "cdjsdd.com", "789")

console.log(chai.encryptPassword())
console.log(chai.changeUsername());