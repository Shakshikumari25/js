const myNums = [1,2,3]

const newNums = myNums.reduce(function (acc,currVal) {
    console.log(`accumulator: ${acc} and current value: ${currVal}`);
    return acc+currVal
}, 0) //0 is the initial value of accumulator

console.log(newNums);

const myTotal = myNums.reduce( (acc,currVal) => acc*currVal, 3)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "sweet",
        price: 999
    },
    {
        itemName: "bag",
        price: 300
    },
    {
        itemName: "tops",
        price: 599
    },
    {
        itemName: "watch",
        price: 10000
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(priceToPay);
