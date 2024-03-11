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