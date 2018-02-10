//Convertions
//Exp1
var val = '100';
var num = val;
var num12 = val;
var temp1 = Number(val);
var temp2 = parseInt(val);
console.log('val:= ', val);
console.log('num:= ', num);
console.log('num12:= ', num12);
console.log('temp1:= ', temp1);
console.log('temp2:= ', temp2);
//Exp2
temp1 = +val; //temp1 is number
console.log('temp1:= ', temp1);
//Exp3
var dynamic = 'Uma Mahesh'; //inferred Type as string
console.log('dynamic: =', dynamic);
dynamic = '123456';
console.log('dynamic: =', dynamic);
//Exp4
var numb = 12;
console.log('numb:=', numb);
//numb = '123';//cannot convert 'string' to 'number'
//Exp5
var m = 123456;
var tostr = m.toString();
console.log(m); //123456
console.log(tostr); //123456
console.log(typeof m);
console.log(typeof tostr);
var dec = 123;
var str = '' + dec;
console.log(dec); //123
console.log(str); //123
console.log(typeof dec);
console.log(typeof str);
