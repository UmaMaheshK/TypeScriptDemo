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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(10, 20);
var p2 = new Point(1, 2);
var p3 = p1.add(p2);
console.log(p3.x); //11
console.log(p3.y); //22
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, new Point(point.x, point.y));
        return new Point3D(point2D.x + point.x, point2D.y + point.y, this.z + point.z);
    };
    return Point3D;
}(Point));
var fooBase = /** @class */ (function () {
    function fooBase() {
    }
    return fooBase;
}());
var f = new fooBase();
console.log(f.name); //undefined
console.log(f.z); //undefined
f.name = 'uma';
f.z = 123;
console.log(f.name); //undefined
console.log(f.z); //undefined
