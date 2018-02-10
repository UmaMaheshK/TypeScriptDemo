//if statement
var x = 10;
var y = 100;
var z = 9;
if (x > y)
    console.log('print in if statement');
//if and else statement
if (x > y)
    console.log('print in if statement');
else
    console.log('print in else statement');
//else if statement
if (x > y)
    console.log('print in if statement');
else if (y > z)
    console.log('print in else if statement');
else
    console.log('print in else statement');
var result;
if (x > y) {
    if (x > z)
        result = 'x';
    else
        result = 'z';
}
else if (y > z)
    result = 'y';
else
    result = 'z';
console.log('biggest: = ', result);
//switch statement
var grade = 'A';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('fair');
        break;
    case 'D':
        console.log('Poor');
        break;
    default:
        break;
}
