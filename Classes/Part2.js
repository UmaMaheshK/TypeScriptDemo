var One = /** @class */ (function () {
    function One(name) {
        this.name = name;
    }
    One.prototype.getName = function () {
        return this.name;
    };
    One.prototype.setName = function (name1) {
        this.name = name1;
    };
    Object.defineProperty(One.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return One;
}());
var O = new One('Uma Mahesh');
console.log(O.getName()); //Uma Mahesh
O.setName('Hello World');
console.log(O.getName()); //Hello World
console.log(O.Name);
O.Name = 'Welcome Boss';
console.log(O.Name);
