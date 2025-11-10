//use earlier method
const laptop = {
brand: "Dell",
model: "XPS 15",
specs: {
    ram: "16GB",

    storage: "512GB SSD"

}
};

//const brand = laptop.brand;
//const model = laptop.model;
const specs = laptop.specs;
console.log(brand, model, specs)

//Destructuring Objects﻿
const { brand, model } = laptop;
console.log(brand, model)
const { specs: { ram } } = laptop;
console.log(ram)
const { brand: laptopBrand } = laptop;
console.log(laptopBrand)


//Destructuring arrays

//const border = ["3px", "solid", "green"];

//const [borderSize, borderType, borderColor] = border;
console.log(borderSize)
console.log(borderType)
console.log(borderColor)


const border = ["3px", "solid", "green"];

const [, , borderColor] = border;
console.log(borderColor)

//combine items into another array with the rest operator
const [, ...typeAndColor] = border;
console.log(typeAndColor)

//normal function
function greet(name) {
    return `Hello ${name}`
}

//arrow function
const greet = (name) => {
    return `Hello ${name}`
}

//final arrow function -> If an arrow function has only one line in the body, and it happens to be a return statement, we can drop the return keyword
const greet = name => `Hello ${name}`

//ternary operator
let userAge = 22;
const userCanVote = userAge >= 18 ? "User can vote" : "User can not vote";
console.log(userCanVote);

//short-circuiting using logical && - short-circuits if the first operand is false or a falsy value {false, o, undefined, null, "empty string"}
console.log(true && "I am blessed and highly favored");
console.log(false && "I am learning and growing");

//short-circuiting using logical || - short-circuits if the first operand is true or truthy
console.log(true || "I learn, I earn and Return");
console.log(false || "Another chance to be better");

//array map method .map() -- takes in a callback function
const array = ["mark", "kibet", "babra", "winnie"]

const newArray = array.map(function (x, y) {
    if (x.length < 6) {
        return x.toUpperCase() + "%%"; 
    }
   return x.toUpperCase(); 
});
console.log(newArray);

//array filter method .filter()
const array1 = ["mark", "kibet", "babra", "winnie"]

const filtered = array1.filter(function (x, y) {
   return x.includes("a")
});
console.log(filtered);

//add items using ... operator
const array2 = ["mark", "kibet", "babra", "winnie"]
const newArray2 = [...array2, "Irene"]
const newArray3 = [...newArray2, "Dandon"]
console.log(newArray3);

//filtered for imutable arrays
const filtered1 = array.filter(function(x){
    return x.length;
})
console.log(filtered1);
