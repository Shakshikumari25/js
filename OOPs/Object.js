function multiply(num){
    return num*5
}

multiply(7)
multiply.power = 3

// console.log(multiply(7));
// console.log(multiply.power);
// console.log(multiply.prototype);

// In javascript everything is almost an object


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    return this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 40)

chai.printMe()
console.log(tea.increment())
