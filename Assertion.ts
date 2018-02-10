//Convertions

//Exp1
let val = '100';
let num: number = <number><any>val;
let num12: number = <any>val;
let temp1: number = Number(val);
let temp2: number = parseInt(val);

console.log('val:= ', val);
console.log('num:= ', num);
console.log('num12:= ', num12);
console.log('temp1:= ', temp1);
console.log('temp2:= ', temp2);

//Exp2
temp1 = +val;//temp1 is number
console.log('temp1:= ', temp1);

//Exp3
let dynamic = 'Uma Mahesh';//inferred Type as string
console.log('dynamic: =', dynamic);
dynamic = '123456';
console.log('dynamic: =', dynamic);

//Exp4
var numb = 12;
console.log('numb:=', numb);
//numb = '123';//cannot convert 'string' to 'number'

//Exp5
let m = 123456;
let tostr: string = m.toString();
console.log(m);//123456
console.log(tostr);//123456

console.log(typeof m);
console.log(typeof tostr);

let dec: number = 123;
let str: string = '' + dec;
console.log(dec)//123
console.log(str)//123

console.log(typeof dec);
console.log(typeof str);