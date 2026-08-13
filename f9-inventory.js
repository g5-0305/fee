//1.functions and objects.
//an object is a collection of pairs (pair of property name(key) and its value) or related items.
//here object is created without class.
//2.for of loop=The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object(iterable: An object that has iterable properties, such as an Array, String, Map, Set, or NodeList). It is the cleanest, most modern way in JavaScript to extract data values directly from collections without managing an index or counter variable.
//3.for each loop.
//arrow function is an anonymous function (lambda function).
//Callback hell (also known as the "Pyramid of Doom") is an anti-pattern in asynchronous programming where multiple nested callbacks (a callback is specifically a function passed into another function as an argument.) depend on each other. This creates a deeply indented, triangle-shaped structure that makes code incredibly difficult to read, debug, and maintain.
//js does automatic type conversion:
// eg 1. 5+5=10 and 5+"5"=55 and 5-"5"=0 ,
// eg 2. 5=="5"? true
// eg 3. 5==="5"? false(because of strict equality operator that checks the data type also).
//js is jit(just in time compiled).

console.clear();
const prompt=require("prompt-sync")();

//1.
console.log("inventory entry system");
console.log();

let stock=[];

function addStock() 
{
    let item_code=Number(prompt("enter item code : "));
    let item_name=prompt("enter item name : ");
    let item_price=Number(prompt("enter item price : "));
    let item_quantity=Number(prompt("enter item quantity : "));

    let item={
        code:item_code,
        item:item_name,
        price:item_price,
        quantity:item_quantity
    };

    stock.push(item); //now stock is an array of objects.

    console.log("\ninventory updated.");
    console.log();
}

while (true){
    addStock();
    let loop=prompt("add more items (0 for no / 1 for yes) : ");
    loop=parseInt(loop);
    if (loop==0) break;
}

console.log("\ninventory entry completed.");
console.log("\nupdated stock is as follows : ");
console.log(stock);
console.log();

//2.
for (let element of stock){
    console.log(element.item, "\n");
}

//3.
stock.forEach((element)=>{console.log(element.price);}); //this is a demo of callback function.