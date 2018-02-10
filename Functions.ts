//Exp1 function declaration
function hello(): void {
    console.log('function with parameters and return type');
}
let hello1 = (): void => { console.log('Fat Array function'); }
setTimeout(() => console.log('Hello'));
hello();
hello1();

//Exp2 function with return types
function greet(): string {
    return 'Hello World';
}

function calling(): string {
    return greet();
}
console.log(calling());

//Exp3 fuction with parameters and returns types

function add(a: number, b: number): number {
    return a + b;
}
console.log('10+20 := ', add(10, 20));

//Exp4 Optional Parameters
function displayInf(id: number, name: string, salar?: number): void {
    console.log('id:= ', id);
    console.log('name:= ', name);
    if ((salar != null) && (salar != undefined))
        console.log('salary:= ', salar);
}
displayInf(10, 'Uma');
displayInf(10, 'Uma', 90000);

//Exp5 rest Parameters
function restFn(...args): number {
    let sum: number = 0;
    args.forEach(e => { sum += e; })
    return sum;
}

console.log('(1,2,3,4) := ', restFn(1, 2, 3, 4));

//Exp6 rest Parameters
function restFn1(id: number, name: string, ...args): number {
    console.log('id: = ', id);
    console.log('name := ', name);
    let sum: number = 0;
    args.forEach(e => { sum += e; })
    return sum;
}

console.log('(10,Uma,1,2,3,4) := ', restFn1(10, 'Uma', 1, 2, 3, 4));


//Exp7 Default Parameters
function sumOf(a: number, b: number, c: number = 1): number {
    return a + b + c;
}
console.log('Default Parameters := ', sumOf(10, 11));

//Exp8 Anonymouse function
let sample = function () {
    console.log('Anonymouse function');
}
sample();

//Exp9 Anonymouse function with parameters and return type
let sample1 = function (a: number, b: number): number {
    return a * b;
}
console.log('Anonymouse function with parameters := ', sample1(10, 2));

//Exp10 Recursion functions
function recursion(n: number): number {
    return n <= 0 ? 1 : n * recursion(n - 1);
}
console.log('recursion := ', recursion(5));

//Exp11 fat array without parameters
let fat = () => console.log('Fat without parameters');
fat();

let fat1 = (x: number) => console.log('Single parameter wih fat array: = ', x)
fat1(10);

let fat2 = x => console.log('single parameter := ', typeof x);
fat2(true);

// //Exp12 function overloading
// function getData():void{
//     console.log('without parameters and return type');
// }
// function getData(a:number):void{
//     console.log('without parameters and return type');
// }
