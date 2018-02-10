//Using Fat Array function
var Employee = /** @class */ (function () {
    function Employee(age) {
        var _this = this;
        this.age = age;
        this.growOld1 = function () { _this.age++; };
        this.growOld2 = function () { return _this.age++; };
    }
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.growOld = function () {
        this.age++;
    };
    Employee.prototype.sumOf = function (a, b) {
        return a + b;
    };
    return Employee;
}());
var emp = new Employee(30);
console.log(emp.getAge()); //30
emp.growOld();
console.log(emp.getAge()); //31
emp.growOld1();
console.log(emp.getAge()); //32
emp.growOld2();
console.log(emp.getAge()); //33
console.log(emp.sumOf(10, 20)); //30
