let score = "45"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let marks = "67ad"
console.log(typeof marks);

let Val = Number(marks)
console.log(typeof Val)
console.log(Val); //we will get NaN(not a number) as val doesnot contains number only


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true and 0 =>false
// "" =>false and "someValue" =>true

let age = 78
let stringNum = String(age)
console.log(typeof stringNum)
console.log(stringNum)