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
