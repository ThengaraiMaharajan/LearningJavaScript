// chapter 3 functions

/*
// // method 1
const square = function(x){
    return x*x
}
console.log(square(2));
*/

/* 
// // method 2
function square(x) {
    return x * x;
}
console.log(square(2));
*/

/*
// // advantages in method 3
console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}
// // this second is used to advantages of method 2
// // Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.
*/

/*
const makeNoise = function() {
console.log("Pling!");
};
makeNoise();
*/


/*
const roundTo = function (n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));
*/

/*
// ### var is global scope,
// ### let and const are local scope,
*/


/*
// ### nested functions,
*/
/*
const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
hummus(1);
*/

/*
// arrow functions
const square1 = (x) => { return x * x; };
var square11 = square1(2)
console.log(square11);
const square2 = x => x * x;
var square22 = square2(4)
console.log(square22);
*/

/*
// call stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");



// function egg(str){
//     console.log(str)
//     return chicken(str)
// }
// function chicken(str){
//     console.log(str)
//     return egg(str)
// }
// egg(1);


*/


/*
// optional parameters
// The following code is allowed and executes without any problem:
// if you pass extra parameter the function works by taking the first parameter
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));


// if you dont pass parameters correctly the function will be executed but that parameter inside function will be undefined
function minus(a, b) {
if (b === undefined) return -a;
else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// console.log(8 % 4);
// console.log(8 / 4);
// console.log(4.5 % 1);
// if you assign a value or expression to a parameter during the declaration, and didnt assign a value during the call, then the control will take value that is declared during the declation
// function roundTo(n, step = 1) {
//     let remainder = n % step;
//     return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(4.5));
// console.log(roundTo(4.5, 2));

*/

/*

// closure
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(4);
let wrap2 = wrapValue(8);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // output -> 10

*/

/*
//  recursion
let times = 0
function power(base, exponent) {
    console.log('called recursively ', base , ' ', exponent);
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log('calling the function first time ',power(2, 3));

*/

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ??
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));