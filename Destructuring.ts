//Array Destructuring

let input: number[] = [10, 12];
let [a, b] = input;

console.log(a);//10
console.log(b);//12

//Swapping
let x: number = 10;
let y: number = 20;
let z: number = 30;

console.log('befor swapping');
console.log('x:=', x);//10
console.log('y:=', y);//20
console.log('z:=', z);//30

[x, y, z] = [z, x, y];

console.log('after swapping');
console.log('x:=', x);//30
console.log('y:=', y);//10
console.log('z:=', z);//20

//Exp3
function values([id, name]: [number, string]) {
    console.log('id:= ', id);//123
    console.log('name:= ', name);//Uma Mahesh
}
values([123, 'Uma Mahesh']);

let [g] = [1, 2, 3, 4, 5];
console.log(g)//1
let [l, n, ...rest] = [1, 2, 3, 4, 5];
console.log(l)//1
console.log(2)//2
console.log(rest)//[3,4,5]

//Exp4
let [, i, , k] = [1, 2, 3, 5];
console.log(i)//2
console.log(k)//5

//Object Destructuring

let o = {
    a1: "foo",
    b1: 12,
    c: "bar"
};
let { a1, b1 } = o;

console.log(a1);
console.log(b1);

({ a1, b1 } = { a1: "baz", b1: 101 });

let emp = { empId: 100, empName: 'Hello' };
//property rename
let { empId: Id, empName: FullName } = emp;
console.log('Id: = ', Id);
console.log('FullName: = ', FullName);

var rect = { x1: 0, y1: 10, width: 15, height: 20 };

// Destructuring assignment
let { x1, y1, width, height } = rect;
console.log(x, y, width, height); // 0,10,15,20

rect.x1 = 10;
({ x1, y1, width, height } = rect); // assign to existing variables using outer parentheses
console.log(x1, y1, width, height); // 10,10,15,20

let foo = { bar: { bas: 123 } };
let { bar: { bas } } = foo; // Effectively `var bas = foo.bar.bas;`
console.log(bas);

let { w, x2, ...remaining } = { w: 1, x2: 2, y: 3, z: 4 };
console.log(w, x2, remaining); // 1, 2, {y:3,z:4}

//Default values
function added(myobj: { a: number, b?: number }): void {
    let { a, b = 200 } = myobj;
    console.log(a, b);
}
added({ a: 1, b: 2 });//1,2
added({ a: 1 });//1 200

//Function declarations
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    console.log(a, b);//
}
//let temp:C={a:133};
f({ a: '150', b: 144 });
f({ a: '150' });

function default1({ a, b }: C = { a: '', b: 0 }): void {
    console.log(a, b);//'' 0
}
default1();
function default2({ a, b = 0 }: C = { a: '' }): void {
    console.log(a, b);//'' 0
}
default2();

//Spread Array

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arrBoth = [...arr1, ...arr2];
console.log(arrBoth);//[1,2,3,4,5,6,7,8]

let arr3 = [1, 2, 3];
let arr4 = [1, 4, 5];
let arr34 = [...arr3, ...arr4];
console.log(arr34);//[ 1, 2, 3, 1, 4, 5 ]

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr56 = [...arr5, 20, ...arr6, 90];
console.log(arr56);//[1,2,3,20,4,5,6,90]

//Spread Object
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);//{ food: 'rich', price: '$$', ambiance: 'noisy' }

let search123 = { food: 'rich', ...defaults };
console.log(search);//{ food: 'rich', price: '$$', ambiance: 'noisy' }