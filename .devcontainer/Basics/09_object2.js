const metaUser = new Object()

metaUser.id = "123abc"
metaUser.name = "Harshit"
metaUser.isLoggedIn = false

// console.log(metaUser);

const regularUser = {
    email : "sos@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "v", 4: "c"}
const obj4 = {5: "d", 6: "h"}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4} //spread method is best 
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "shakshi@gmail.com"
    },
    {
        id: 2,
        email: "shahi@gmail.com"
    },
    {
        id: 3,
        email: "sh@gmail.com"
    }
]

// console.log(users[0].email);

// console.log(Object.keys(metaUser));
// console.log(Object.values(metaUser));
// console.log(Object.entries(metaUser));

// console.log(metaUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "990",
    courseInstructor: "jhschb"
}

const {courseInstructor} = course

const {courseInstructor: inst} = course

// console.log(courseInstructor);

// console.log(inst);

//JSON
// {
//     "name": "Shakshi",
//     "course": "js"
//     "duration": "1Month"
// }

//api format
[
    {},
    {},
    {},
]

