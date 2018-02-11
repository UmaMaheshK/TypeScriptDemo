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

// ({ al, b } = { al: "baz", b: 101 });
