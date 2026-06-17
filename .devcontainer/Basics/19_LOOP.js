//for of

const arr = [1,2,3,4,5]

for (const ele of arr) {
    // console.log(`i'm ${ele}`);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Character is ${greet}`);
}


// MAPS

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

for(const key in map){ //can't run forin loop on map
    // console.log(map[key]);
}


// const myObject = {
//     game1 : "Temple Run",
//     game2 : "GTA6"
// }

// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    // OBJECTS ARE NOT ITERABLE AS MAP
// }


const myObject2 = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    // console.log(key);
}

for(const key in myObject2){
    // console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java", "c"]

for(const key in programming){
    // console.log(key);
    // console.log(programming[key]);
}


const coding = ["js", "ruby", "java", "cpp", "python", "C"]

// coding.forEach(element => {
//     console.log(element);
// });

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "JavaScript",
        fileName: "js"
    },
    {
        languageName: "Python",
        fileName: "py"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
