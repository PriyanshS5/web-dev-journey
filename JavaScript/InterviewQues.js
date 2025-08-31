//OM NAMAH SHIVAY
//What is Function Declaration??

//function definitions(params){
//   do something;
//};
// function print(){
//     console.log("Hello World");
// };


//What is Function Expression??

// let greet = function (n){                         its fine to not give the function name becaus e we are giving th eexpression name..
//     for(let i = 1; i <= n; i++){                  this is an anonymous function which can be assigned to a variable or passed as a callback..
//         console.log("Good Morning")
//     };
// };
// greet(5);


//What are First Class Functions??

//In a language where a function can be treated like a variable these functions are called first class functions.
//  function gm(n){
//     for(let i = 0; i <= n; i++){   
//         console.log("Good Morning")
//     };
//  };
//  function greet(fn){
//     fn(9);
//  }
//  greet(gm);


//What is IIFE?

//Imediately Invoked Function Expressions.
// (function fn(n){
//     console.log(n * n);
// })(10);


// What is a Closure Function in JavaScript?

// A closure is a function that remembers the variables from its lexical scope even when the function is executed outside that scope.
// A closure is when a function "closes over" its outer variables and keeps access to them.
// function outer() {
//   let counter = 0;
//   return function inner() {
//     counter++;
//     console.log(counter);
//   }
// }
// const count = outer(); // outer() returns inner function
// count(); // 1
// count(); // 2
// count(); // 3


// IIFE - o/p based questions?

// (function rm(x){
// (function fn(n){
//     console.log(x);
// })(10);
// })(12);

//output = 12


//







