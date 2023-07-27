let array = [500, "pen", true, "eraser", null]

// length of array
console.log("Length of array: ", array.length);

// get elements by index
console.log("First element of array: ", array[0]);
console.log("No element: ", array[5]);

// push() and pop()
array.push("scale");
console.log("After push: ", array);

array.pop();
array.pop();
console.log("After pop: ", array);

// shift() and unshift() 
array.shift();
console.log("After shift: ", array);

array.unshift("scale");
console.log("After unshift: ", array);

// join(), delete(), concat()
console.log("Join: ", array.join(" heyy "));

delete array[1];
console.log("After delete: ", array);

console.log("Concat: ", array.concat(false, 200));

// flat(), splice(), slice()
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = [11,12,13,14,15];

let array4 = [array1, array2, array3];
console.log("Before Flat: ", array4);
console.log("After Flat: ", array4.flat());

array4.splice(1,1);
console.log("Splice: ", array4);

console.log("Slice: ", array4.slice(0,2));

// object representing a person
let person = {
    Name : "Dulari",
    Age : 20,
    Gender : "Female"
}

function getPerson()
{
    return person;
}

console.log("Person: ", getPerson());