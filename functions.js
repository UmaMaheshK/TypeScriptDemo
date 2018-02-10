//Exp1 function declaration
function hello() {
    console.log('function with parameters and return type');
}
var hello1 = function () { console.log('Fat Array function'); };
setTimeout(function () { return console.log('Hello'); });
hello();
hello1();
//Exp2 function with return types
function greet() {
    return 'Hello World';
}
function calling() {
    return greet();
}
console.log(calling());
//Exp3 fuction with parameters and returns types
function add(a, b) {
    return a + b;
}
console.log('10+20 := ', add(10, 20));
//Exp4 Optional Parameters
function displayInf(id, name, salar) {
    console.log('id:= ', id);
    console.log('name:= ', name);
    if ((salar != null) && (salar != undefined))
        console.log('salary:= ', salar);
}
displayInf(10, 'Uma');
displayInf(10, 'Uma', 90000);
//Exp5 rest Parameters
function restFn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (e) { sum += e; });
    return sum;
}
console.log('(1,2,3,4) := ', restFn(1, 2, 3, 4));
//Exp6 rest Parameters
function restFn1(id, name) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log('id: = ', id);
    console.log('name := ', name);
    var sum = 0;
    args.forEach(function (e) { sum += e; });
    return sum;
}
console.log('(10,Uma,1,2,3,4) := ', restFn1(10, 'Uma', 1, 2, 3, 4));
//Exp7 Default Parameters
function sumOf(a, b, c) {
    if (c === void 0) { c = 1; }
    return a + b + c;
}
console.log('Default Parameters := ', sumOf(10, 11));
//Exp8 Anonymouse function
var sample = function () {
    console.log('Anonymouse function');
};
sample();
//Exp9 Anonymouse function with parameters and return type
var sample1 = function (a, b) {
    return a * b;
};
console.log('Anonymouse function with parameters := ', sample1(10, 2));
//Exp10 Recursion functions
function recursion(n) {
    return n <= 0 ? 1 : n * recursion(n - 1);
}
console.log('recursion := ', recursion(5));
//Exp11 fat array without parameters
var fat = function () { return console.log('Fat without parameters'); };
fat();
var fat1 = function (x) { return console.log('Single parameter wih fat array: = ', x); };
fat1(10);
var fat2 = function (x) { return console.log('single parameter := ', typeof x); };
fat2(true);
