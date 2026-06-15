// let a = 10
// const b = 20
// var c = 40

if(true){  //block scope
    let a = 10
    const b = 20
    // var c = 30 
    // c = 90
    // var and c are not used in block scope as they work out of block also
}

// console.log(a);
// console.log(b);
// console.log(c);


//CLOSURE
function one(){
    const userName = "Shakshi"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)

    //child function can access parent function variable but vice versa not true

    // two()
}

// one()

if(true){
    const username  = "kriti"
    if(true){
        const website = " facebook"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addOne(7)); //we can access function anywhere 

function addOne(num){
    return num+1
}

// addOne(8)

// console.log(addTwo(5))  //we can not access expression evrywhere

const addTwo = function(num){ //function cum expression
    return num+2
}

console.log(addTwo(4));
