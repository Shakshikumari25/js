const score = 400
// console.log(score);

const balance = new Number(999)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 34.5442
// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN '));



// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(4,3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8));
// console.log(Math.min(4,3,5,8,9));
// console.log(Math.max(4,3,5,8,9));


// console.log(Math.random()); //value between 0 and 1
// console.log((Math.random()*10)+1); //btn 1 and 10
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max-min+1)) + min);//more customised


//DATES

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let newDate = new Date(2025,0,23)
// console.log(newDate);
// console.log(newDate.toLocaleDateString());

let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

console.log(myCreatedDate.getMonth());
console.log(myCreatedDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})
