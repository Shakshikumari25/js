class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, subject){
        super(username)
        this.email = email
        this.subject = subject
    }

    addDept(){
        console.log(`teaches in department of ${this.subject}`)
    }
}

const chai = new Teacher("chai", "ssj.com", "physics")

chai.addDept()

const code = new User("code")
code.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
