// let myName = "shakshi      "

// console.log(myName.length);
// // console.log(myName.trueLength);
// console.log(myName.trim().length); --to get true length


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shakshi = function(){
    console.log(`Shakshi is present in all Objects`);
}

// heroPower.shakshi()
// myHeros.shakshi()


// INHERITANCE

// const user = {
//     name: "dcbshcdj",
//     email: "dhsusjd.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable = true
// }

// const TASupport = {
//     makeAssignment: "Maths Assignment",
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = user


// // modern syntax to set prototype

// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "fnueimfu"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUser.trueLength()