class user{
    constructor(username){
        this.username = username
    }

    findMe(){
        console.log(`${this.username} is found`);
    }

    static createId(){
        return `123`
    }
}

const newUser = new user("Shakshi")
// console.log(newUser.createId())

class kid extends user{
    constructor(username, email){
        super(user)
        this.email = email
    }
}

const boy = new kid("Harshit", "harsh@gmail.com")
boy.findMe()