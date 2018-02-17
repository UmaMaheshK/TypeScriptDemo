"use strict";
exports.__esModule = true;
var AllinOne = {
    name: function () { return console.log('default function'); },
    add: function (a, b) { return a + b; },
    Retrun: function () { return 10; },
    Employee: /** @class */ (function () {
        function class_1(name) {
            this.name = name;
            this.getMyName = function () { return 'Uma Mahesh'; };
            console.log(this.name);
        }
        return class_1;
    }())
};
exports["default"] = AllinOne;
