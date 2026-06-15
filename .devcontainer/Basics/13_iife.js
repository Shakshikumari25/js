// Immediately Invoked Function Expression(IIFE)

//used to immediately invoke the function and to stop problem of pollution due to global space
(function chai(){
    console.log(`DB Connected`)
})(); //remember to use semi colon to use more than one iife 

( () => {
    console.log(`hii`)
})();

( (name) => {
    console.log(`hii, ${name}`)
})("Abhishek");