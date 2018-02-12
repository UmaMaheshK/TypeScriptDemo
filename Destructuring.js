//Array Destructuring
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var input = [10, 12];
var a = input[0], b = input[1];
console.log(a); //10
console.log(b); //12
//Swapping
var x = 10;
var y = 20;
var z = 30;
console.log('befor swapping');
console.log('x:=', x); //10
console.log('y:=', y); //20
console.log('z:=', z); //30
_a = [z, x, y], x = _a[0], y = _a[1], z = _a[2];
console.log('after swapping');
console.log('x:=', x); //30
console.log('y:=', y); //10
console.log('z:=', z); //20
//Exp3
function values(_a) {
    var id = _a[0], name = _a[1];
    console.log('id:= ', id); //123
    console.log('name:= ', name); //Uma Mahesh
}
values([123, 'Uma Mahesh']);
var g = [1, 2, 3, 4, 5][0];
console.log(g); //1
var _b = [1, 2, 3, 4, 5], l = _b[0], n = _b[1], rest = _b.slice(2);
console.log(l); //1
console.log(2); //2
console.log(rest); //[3,4,5]
//Exp4
var _c = [1, 2, 3, 5], i = _c[1], k = _c[3];
console.log(i); //2
console.log(k); //5
//Object Destructuring
var o = {
    a1: "foo",
    b1: 12,
    c: "bar"
};
var a1 = o.a1, b1 = o.b1;
console.log(a1);
console.log(b1);
(_d = { a1: "baz", b1: 101 }, a1 = _d.a1, b1 = _d.b1);
var emp = { empId: 100, empName: 'Hello' };
//property rename
var Id = emp.empId, FullName = emp.empName;
console.log('Id: = ', Id);
console.log('FullName: = ', FullName);
var rect = { x1: 0, y1: 10, width: 15, height: 20 };
// Destructuring assignment
var x1 = rect.x1, y1 = rect.y1, width = rect.width, height = rect.height;
console.log(x, y, width, height); // 0,10,15,20
rect.x1 = 10;
(x1 = rect.x1, y1 = rect.y1, width = rect.width, height = rect.height); // assign to existing variables using outer parentheses
console.log(x1, y1, width, height); // 10,10,15,20
var foo = { bar: { bas: 123 } };
var bas = foo.bar.bas; // Effectively `var bas = foo.bar.bas;`
console.log(bas);
var _e = { w: 1, x2: 2, y: 3, z: 4 }, w = _e.w, x2 = _e.x2, remaining = __rest(_e, ["w", "x2"]);
console.log(w, x2, remaining); // 1, 2, {y:3,z:4}
//Default values
function added(myobj) {
    var a = myobj.a, _a = myobj.b, b = _a === void 0 ? 200 : _a;
    console.log(a, b);
}
added({ a: 1, b: 2 }); //1,2
added({ a: 1 }); //1 200
function f(_a) {
    var a = _a.a, b = _a.b;
    console.log(a, b); //
}
//let temp:C={a:133};
f({ a: '150', b: 144 });
f({ a: '150' });
function default1(_a) {
    var _b = _a === void 0 ? { a: '', b: 0 } : _a, a = _b.a, b = _b.b;
    console.log(a, b); //'' 0
}
default1();
function default2(_a) {
    var _b = _a === void 0 ? { a: '' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b); //'' 0
}
default2();
//Spread Array
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var arrBoth = arr1.concat(arr2);
console.log(arrBoth); //[1,2,3,4,5,6,7,8]
var arr3 = [1, 2, 3];
var arr4 = [1, 4, 5];
var arr34 = arr3.concat(arr4);
console.log(arr34); //[ 1, 2, 3, 1, 4, 5 ]
var arr5 = [1, 2, 3];
var arr6 = [4, 5, 6];
var arr56 = arr5.concat([20], arr6, [90]);
console.log(arr56); //[1,2,3,20,4,5,6,90]
//Spread Object
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.log(search); //{ food: 'rich', price: '$$', ambiance: 'noisy' }
var search123 = __assign({ food: 'rich' }, defaults);
console.log(search);
var _a, _d;
