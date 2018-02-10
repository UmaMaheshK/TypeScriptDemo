var a = 10, b = 5;
console.log('Arthmetic Operators');
console.log('Addition := ', (a + b));
console.log('Subtraction := ', (a - b));
console.log('Multiplication', a * b);
console.log('exponent:=', Math.pow(a, b));
console.log('Division := ', a / b);
console.log('Modulus:= ', a % b);
console.log('post increment:= ', ++a);
console.log('pre increment:= ', a++);
console.log('post decrement:= ', --a);
console.log('pre decrement:= ', a--);
a = 10;
b = 20;
console.log('Comparation Operators');
console.log('< := ', a < b);
console.log('<= := ', a <= b);
console.log('> := ', a > b);
console.log('>= := ', a >= b);
console.log('== := ', a == b);
console.log('!= := ', a != b);
console.log('&& := ', ((a > 0) && (2 < a)));
console.log('|| := ', ((a > 0) || (2 < a)));
//negation operator
console.log('negation operator(-):= ', -a); //-10
var isMale = true;
console.log('negation operator(!):= ', !isMale); //false
//string concatation operator
var first = 'Uma';
var middle = 'Mahesh';
var result = first + " " + middle;
console.log(result);
//conditional operators
var x = 10;
var y = 10;
var bigger = (x == y) ? 'Bother are eqal' : (x > y) ? 'x is bigger than y' : 'y is bigger than x';
console.log(bigger);
