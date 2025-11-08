# **Essential JavaScript for React (Review)﻿**



* ###### Before you dive into React, it’s crucial to have your JavaScript fundamentals in place.

###### 

* ###### React is built on JavaScript, and if you don't have a good grip on things like variables, functions, arrays, and objects, you're basically trying to build a house without knowing how to use a hammer.

###### 

* ###### In this review, we’ll walk through the essential JavaScript concepts you need to be confident with before you can get into React.





### **Destructuring Arrays and Objects﻿**



* ###### Destructuring lets you extract values from arrays or properties from objects and assign them to variables in a single, elegant line of code.



### **Destructuring Objects﻿**

* ###### Let's say we have this object:



**const laptop = {**

  **brand: "Dell",**

  **model: "XPS 15",**

  **specs: {**

    **ram: "16GB",**

    **storage: "512GB SSD"**

  **}**

**};**



* ###### If we wanted to assign the laptop brand and model to a variable, we could do something like this:



**const brand = laptop.brand;**

**const model = laptop.model;**

**console.log(brand, model)**



* ###### With destructuring, it's simple, we can do it in a single elegant line like this:



**const { brand, model } = laptop;**

**console.log(brand, model)**



* ###### We could even go deeper:



**const { specs: { ram } } = laptop;**

**console.log(ram)**



* ###### We can also rename the variables during destructuring as shown:



**const { brand: laptopBrand } = laptop;**

**console.log(laptopBrand)**



### **Destructuring Arrays﻿**



* ###### Arrays use positions to destructure and not properties.



**const border = \["3px", "solid", "green"];**



**const \[borderSize, borderType, borderColor] = border;**

**console.log(borderSize)**

**console.log(borderType)**

**console.log(borderColor)**



* ###### We can also skip items during destructuring;



**const border = \["3px", "solid", "green"];**



**const \[, , borderColor] = border;**

**console.log(borderColor)**



* ###### You can also combine items into another array with the rest operator:



**const border = \["3px", "solid", "green"];**



**const \[, ...typeAndColor] = border;**

**console.log(typeAndColor)**

