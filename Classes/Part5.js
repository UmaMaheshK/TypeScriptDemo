var Two = /** @class */ (function () {
    function Two(name) {
        var _this = this;
        this.id = 100;
        this.getId = function () { return _this.id; };
        this.getName = function () { return _this.name; };
        this.name = name;
    }
    return Two;
}());
var out = new Two('Uma Mahesh');
console.log(typeof out);
console.log(out.id);
console.log(out.name);
console.log(out.getId());
console.log(out.getName());
