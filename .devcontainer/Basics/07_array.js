const myArray = [3,5,7,89,1]

// console.log(myArray[2]);

const myArr2 = new Array(2,5,6,7,9)
// console.log(myArr2);
// console.log(myArr2.length);

// myArray.push(7);
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(66)

// console.log(myArray.includes(9)); 
// console.log(myArray);


// console.log("A",myArray);

const myn1 = myArray.slice(1,4);

// console.log(myn1);
// console.log("B ",myArray);

const myN2 = myArray.splice(1,4); //manipulates original array 
// console.log("C ",myArray);
// console.log(myN2);

const marvel_heroes= ["thor","spiderman","ironman"]
const dc_heroes = ["spiderman","flash","batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); //takes entire dc_heroes as a single element
// console.log(marvel_heroes[3][2]);

const newHeroes = marvel_heroes.concat(dc_heroes);
// console.log(newHeroes);

const allHeroes = [...marvel_heroes,...dc_heroes] //spread better than concat
console.log(allHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const anotherArray2 = another_array.flat(Infinity)
console.log(anotherArray2);


console.log(Array.isArray("Shakshi"));
console.log(Array.from("Shakshi"));
console.log(Array.from({name: "Shakshi"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
