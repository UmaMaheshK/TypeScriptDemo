//if statement

let x: number = 10;
let y: number = 100;
let z: number = 9;

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

let result: string;
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
let grade: string = 'A';
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