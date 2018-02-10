//Exp1
let g: number = 10;//Global variable
class Scope {
    private x: number = 10;//class variable
    static m: number = 100;//static variable
    readonly r: number = 123;
    // const p:number;
    hello(): void {
        let n: number = 120;//method variables or scope variable
    }
}

console.log('Global Variable := ', g);
console.log('static variable :=', Scope.m);
const h = new Scope();
console.log('readonly:= ', h.r);

//Exp2
var temp: number = 10;
{
    var temp: number = 100;
}
console.log(temp);//100

let temp1: number = 890;
{
    let temp1: number = 100;
}
console.log(temp1);//890

//Exp3
//var
var x = [];
for (var index = 0; index < 5; index++) {
    var element = index;
    x.push(() => console.log(element));//Here passing function
}
x.forEach((r) => r());//call each function in array.
//output 4 4 4 4 4
x.splice(0, x.length);
//Using let
for (var index = 0; index < 5; index++) {
    let element = index;
    x.push(() => console.log(element));//Here passing function
}
x.forEach((r) => r());//call each function in array.
//output 0 1 2 3 4
x = [];//clear all elements

for (let index = 0; index < 5; index++) {
    let element = index;
    x.push(() => console.log(element));//Here passing function
}
x.forEach((r) => r());//call each function in array.
//output 0 1 2 3 4