// const coding = ["js", "ruby", "java", "cpp", "python"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)

// const newNums = myNums.filter( (num) => {
//     return num > 4; 
//     //here we have started a scope that's why return is used here
// })


//If we want to do same work using for each loop then
const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

// console.log(newNums); 


const books = [
    { title: 'Book1', genre: 'Fiction', publis: 1981,
        edition: 2004},
    { title: 'Book2', genre: 'Non Fiction', publis: 1984,
        edition: 2003},
    { title: 'Book3', genre: 'History', publis: 1999,
        edition: 2007},
    { title: 'Book4', genre: 'Non Fiction', publis: 2009,
        edition: 2010},
    { title: 'Book5', genre: 'Science', publis: 1981,
        edition: 2004},
    { title: 'Book6', genre: 'Fiction', publis: 2005,
        edition: 2004},
    { title: 'Book7', genre: 'History', publis: 2001,
        edition: 2004},
    { title: 'Book8', genre: 'Fiction', publis: 2011,
        edition: 2004},
    { title: 'Book9', genre: 'Non Fiction', publis: 1981,
        edition: 2004},
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

let userBooks = books.filter( (bk) => {return bk.publis >= 2000})

console.log(userBooks);
