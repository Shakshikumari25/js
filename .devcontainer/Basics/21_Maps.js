const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map( (num) => num+10)

//chaining
const newNumbers = myNumbers.map((num) => num*10)
                            .map( (el) => el+1)
                            .filter( (num) => num>=69)

console.log(newNumbers);