// global and local variables
var a = 10;
var b = 20;

function sum(x,y)
{
    var c = x+y;
    return c;
}

console.log("Sum: ", sum(a,b));

// console.log("c: ", c);  // error

// factorial using recursion
function factorial(n)
{
    if(n==1)
    {
        return 1;
    }
    else
    {
        return n*factorial(n-1);
    }
}

console.log("Factorial: ", factorial(5));

// nested functions
function outer()
{
    console.log("Outer");
    str = "hello"
    function inner()
    {
        console.log("Inner");
        str = "hey"
    }
    inner();
    console.log(str)
}

outer()