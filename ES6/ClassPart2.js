var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Inheritance
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.doStuff = function () {
        console.log('Called from A');
    };
    A.prototype.callDoStuff = function () {
        this.doStuff();
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.doStuff = function () {
        _super.prototype.doStuff.call(this);
        console.log('Called from B');
    };
    return B;
}(A));
var a = new A();
a.callDoStuff(); //Called from A
var b = new B();
b.callDoStuff(); //Called from A Called from B
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.sayName = function () { return console.log('Say from Animal Class'); };
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sayName = function () { return console.log('Say from Dog Class\nname := ', _this.name); };
        return _this;
    }
    return Dog;
}(Animal));
var animal = new Animal('Uma Mahesh');
animal.sayName(); //Say from Animal Class
var dog = new Dog('Hi');
dog.sayName(); //Say from Dog Class
var ani = new Dog('Uma Mahesh');
ani.sayName();
