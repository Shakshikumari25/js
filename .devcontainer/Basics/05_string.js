// const name = "Shakshi"
// const repoCount = 50

// console.log(name+repoCount+"value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("yhdugdfs")
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-6.3)
console.log(anotherString);

const ssas = "  ffdfd fgfgfg     gggg       "
console.log(ssas);
console.log(ssas.trim());

const url = "https://hitesh.com//&67singh"
console.log(url.replace('&67','--43'));
console.log(url.includes('hitesh'));
