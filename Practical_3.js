// ECMASCRIPT 6

// let and const
let a = 10;
const b = 20;

// arrow functions
const sum = (x,y) => x+y;

// Spreadof operator
let array = [1,2,3,4,5];
console.log("Before Spread: ", array);
console.log("Spread: ", ...array);

// For of loop
for(let i of array)
{
    console.log("For of: ", i);
}

// Map and Set
let map = new Map();
map.set("Name", "Dulari");
map.set("Age", 20);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log("Map: ", map);
console.log("Set: ", set);

// classes
class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("Dulari", 20);
console.log("Person: ", person);

// Promises
let promise = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a==2)
    {
        resolve("Success");
    }
    else
    {
        reject("Failed");
    }
})

promise.then((message) => {
    console.log("Then: ", message);
}
).catch((message) => {
    console.log("Catch: ", message);
})

// Symbols
let symbol = Symbol("Hello");
console.log("Symbol: ", symbol);

// Default parameters
function Sum(x=1,y=2)
{
    return x+y;
}

console.log("Sum: ", Sum());

// Functions rest parameters
function SUM(...args)
{
    return args.reduce((a,b) => a+b);
}

console.log("Sum: ", SUM(1,2,3,4,5));
