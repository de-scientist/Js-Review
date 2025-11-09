# **Essential JavaScript for React (Review)﻿**



* ##### Before you dive into React, it’s crucial to have your JavaScript fundamentals in place.

##### 

* ##### React is built on JavaScript, and if you don't have a good grip on things like variables, functions, arrays, and objects, you're basically trying to build a house without knowing how to use a hammer.

##### 

* ##### In this review, we’ll walk through the essential JavaScript concepts you need to be confident with before you can get into React.





### **Destructuring Arrays and Objects﻿**

##### 

* ##### Destructuring lets you extract values from arrays or properties from objects and assign them to variables in a single, elegant line of code.



### **Destructuring Objects﻿**

* ##### Let's say we have this object:



**const laptop = {**

**brand: "Dell",**

**model: "XPS 15",**

**specs: {**

&nbsp;   \*\*ram: "16GB",\*\*

    \*\*storage: "512GB SSD"\*\*


**}**

**};**

##### 

* ##### If we wanted to assign the laptop brand and model to a variable, we could do something like this:



**const brand = laptop.brand;**

**const model = laptop.model;**

**console.log(brand, model)**



* ##### With destructuring, it's simple, we can do it in a single elegant line like this:



**const { brand, model } = laptop;**

**console.log(brand, model)**



* ##### We could even go deeper:



**const { specs: { ram } } = laptop;**

**console.log(ram)**



* ##### We can also rename the variables during destructuring as shown:



**const { brand: laptopBrand } = laptop;**

**console.log(laptopBrand)**



### **Destructuring Arrays﻿**



* ##### Arrays use positions to destructure and not properties.



**const border = \["3px", "solid", "green"];**



**const \[borderSize, borderType, borderColor] = border;**

**console.log(borderSize)**

**console.log(borderType)**

**console.log(borderColor)**



* ##### We can also skip items during destructuring;



**const border = \["3px", "solid", "green"];**



**const \[, , borderColor] = border;**

**console.log(borderColor)**



* ##### You can also combine items into another array with the rest operator:



**const border = \["3px", "solid", "green"];**



**const \[, ...typeAndColor] = border;**

**console.log(typeAndColor)**



## **Rest and Spread Operator﻿**



### **The Spread Operator (...)﻿**



* ##### The spread operator expands elements of an iterable (like an array or object) into individual elements.



**const numbers = \[1, 2, 3, 4];**

**console.log(...numbers) // 1 2 3 4**



* ##### We can use the spread operator for shallow copying arrays:



**const numbers = \[1, 2, 3, 4];**

**const numbersCopy = \[...numbers]**

**console.log(numbersCopy)**



* ##### We can use the spread operator for merging arrays:



**const arr1 = \[1, 2, 3]**

**const arr2 = \[4, 5, 6]**

**console.log(\[...arr1, ...arr2])**





### **The Rest Operator (...)﻿**



* ##### The rest operator bundles values into an array or an object.

##### 

* ##### It is used in function parameters or destructuring.



**function sum(...numbers) {**

    **console.log(numbers)**

**}**

**sum(1, 2, 3) // \[1, 2, 3]**

**sum(2, 1, 99, 22, 29, 38) // \[2, 1, 99, 22, 29, 38]**



* ##### Here, **...numbers** grabs all the passed arguments and packs them into an array called **numbers**.





### **Template Literals﻿**



##### Template literals are special strings in JavaScript that use backticks ( ` ) instead of regular quotes.

##### 

##### They let you:



* ##### Embed variables or expressions directly into the string

##### 

* ##### Write multi-line strings without \\n escape characters.



##### For example, instead of:



**const message = "Hello, " + name + "!";**



**const name = "Dennis";**

**const message = `Hello, ${name}!`;**





### **The Ternary Operator﻿**



##### The ternary operator is a shorthand for if...else.

##### 

##### The syntax for the ternary operator is:



* **condition ? expressionIfTrue : expressionIfFalse;**



##### For example, instead of:



**let canVote;**

**let age = 25;**

**if (age > 18) {**

  **console.log("Can vote");**

**} else {**

  **console.log("Cannot vote");**

**}**



##### We can use the ternary operator:



**let canVote;**

**let age = 25;**



**canVote = age > 25 ? "Can vote" : "Cannot vote";**





### **Arrow Functions﻿**



##### Arrow functions are a shorter syntax for writing functions.

##### 

##### Consider the function below:



**function greet(name) {**

    **return `Hello ${name}`**

**}**



##### We can easily convert it into an arrow function:



**const greet = (name) => {**

    **return `Hello ${name}`**

**}**



##### If an arrow function has only one parameter, we can drop the parenthesis:



**const greet = name => {**

    **return `Hello ${name}`**

**}**



##### If an arrow function has only one line in the body, you can drop the curly brackets:



**const greet = name => console.log(`Hello ${name}`)**



##### If an arrow function has only one line in the body, and it happens to be a return statement, we can drop the return keyword:



**const greet = name => `Hello ${name}`**





### **Short-Circuiting﻿**



##### Short-circuiting is a behavior in programming where some logical operators stop evaluating as soon as the result is determined.

##### 

##### Think of short-circuiting like this: **"If I already know the answer, why keep asking the question".**

##### 

##### Short-circuiting means that the operator will return the first value and not even bother looking at the second value.



#### **Short-Circuiting With Logical \&\&﻿**



##### The **AND** operator short-circuits when the first operand is **false**.

##### 

##### Basically, when the first operand is **true** or any **truthy** value, the **AND** operator will return the second value, no matter what that value is, it only short-circuits when the first value is **falsy**.



**console.log(true \&\& "Hello, World"); // Hello, World**

**console.log(false \&\& "Hello, World"); // false**



##### We can use the **AND** operator as an **if statement.**

##### 

##### Instead of:



**const age = 25;**

**if (age > 18) {**

    **console.log(`You are an adult`)**

**}**



**const age = 25;**

**console.log(age > 18 \&\& "you are an adult")**



Short-Circuiting With Logical ||﻿



The OR operator short-circuits when the first operand is true or truthy and returns it.



Basically, when the first operand is true or any truthy value, the OR operator will return that value, if the first operand is false or andy falsy value, it will return the second operand.



console.log(true || "Hello, World"); // true

console.log(false || "Hello, World"); // Hello, World

The OR operator is useful for setting default values:



function greet(userName) {

&nbsp;   console.log(`Hello ${userName || "Guest"}`)

}

Short-Circuiting With Nullish Coalescing Operator ??﻿

The Nullish Coalescing Operator returns the second value when the first value is null or undefined, but not when it is 0 or an empty string.



Unlike ||, it doesn’t treat falsy values like 0, "", or false as falsy.



console.log(undefined ?? 'Hello, world'); // Hello, world

console.log(0 ?? 'Hello, world'); // 0



