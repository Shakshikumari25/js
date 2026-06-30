class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email} is not a big deal`;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();
        return `i am a big fan of ${this._password}jhfeunfei`
    }

    set password(value){
        this._password = value;
    }
}

const shakshi = new User("harshi@gmai.com", "cncndv")
console.log(shakshi.password);
console.log(shakshi.email);
console.log(this._email);