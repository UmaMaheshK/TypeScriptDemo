//Exp1
var g = 10; //Global variable
var Scope = /** @class */ (function () {
    function Scope() {
        this.x = 10; //class variable
        this.r = 123;
    }
    // const p:number;
    Scope.prototype.hello = function () {
        var n = 120; //method variables or scope variable
    };
    Scope.m = 100; //static variable
    return Scope;
}());
console.log('Global Variable := ', g);
console.log('static variable :=', Scope.m);
var h = new Scope();
console.log('readonly:= ', h.r);
//Exp2
var temp = 10;
{
    var temp = 100;
}
console.log(temp); //100
var temp1 = 890;
{
    var temp1_1 = 100;
}
console.log(temp1); //890
//Exp3
//var
var x = [];
for (var index = 0; index < 5; index++) {
    var element = index;
    x.push(function () { return console.log(element); }); //Here passing function
}
x.forEach(function (r) { return r(); }); //call each function in array.
//output 4 4 4 4 4
x.splice(0, x.length);
var _loop_1 = function () {
    var element_1 = index;
    x.push(function () { return console.log(element_1); }); //Here passing function
};
//Using let
for (var index = 0; index < 5; index++) {
    _loop_1();
}
x.forEach(function (r) { return r(); }); //call each function in array.
//output 0 1 2 3 4
x = []; //clear all elements
var _loop_2 = function (index_1) {
    var element_2 = index_1;
    x.push(function () { return console.log(element_2); }); //Here passing function
};
for (var index_1 = 0; index_1 < 5; index_1++) {
    _loop_2(index_1);
}
x.forEach(function (r) { return r(); }); //call each function in array.
//output 0 1 2 3 4
