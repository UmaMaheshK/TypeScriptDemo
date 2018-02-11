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
var _a;
