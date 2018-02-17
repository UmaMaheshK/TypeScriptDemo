"use strict";
exports.__esModule = true;
var sqrt = Math.sqrt;
function squar(x) {
    return x * x;
}
exports.squar = squar;
function doubles(x) {
    return sqrt(x) + sqrt(x);
}
exports.doubles = doubles;
exports.Sum = function (a, b, c) { return a + b + c; };
exports.Add = function (a, b, c) { return a + b + c; };
var n = 123;
var name = 'Uma Mahesh';
var DemoClass = /** @class */ (function () {
    function DemoClass() {
        this.display = function () { return n + ' ' + name; };
    }
    return DemoClass;
}());
exports.DemoClass = DemoClass;
exports["default"] = (function () { return 'Uma Mahesh'; });
exports.counter = 0;
function inc() {
    exports.counter++;
}
exports.inc = inc;
