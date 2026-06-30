const User = {
    _email: 'klsdjsd.com',
    _password: 'abd',

    get email(){
        return this._email
    },

    set email(val){
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email);