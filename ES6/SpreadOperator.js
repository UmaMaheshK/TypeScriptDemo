function fn1(a, b, c) {
    console.log(a, b, c);//1 2 3
}
let arr2 = [1, 2, 3];
fn1(...arr2);

//Array with Spread
let arr = [1, 2, 3];
let arr1 = [4, 5];
let ar = [...arr, ...arr1];
console.log(ar);//[1,2,3,4,5]

//array assign with spread
arr = [...arr, ...ar];
console.log(arr);

//Object with Spread
const first = { x: 1, y: 2 };
const second = { ...first, z: 3 };
console.log(second);//{ x: 1, y: 2, z: 3 }

first.m = 100;
const three = { ...first, ...second };
console.log(three);//{ x: 1, y: 2, m: 100, z: 3 }