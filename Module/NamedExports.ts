/*

export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
*/

/*
//Re-exporting  #
export * from 'src/other_module';
Or you can be more selective (optionally while renaming):

export { foo, bar } from 'src/other_module';

// Export other_module’s foo as myFoo
export { foo as myFoo, bar } from 'src/other_module';

*/

const sqrt = Math.sqrt;
export function squar(x) {
    return x * x;
}
export function doubles(x) {
    return sqrt(x) + sqrt(x);
}
export const Sum = (a: number, b: number, c: number) => a + b + c;
export let Add = (a: number, b: number, c: number) => a + b + c;

let n: number = 123;
const name: string = 'Uma Mahesh';

export class DemoClass {
    display = () => n + ' ' + name;
}
export default () => 'Uma Mahesh'

export let counter = 0;
export function inc() {
    counter++;
}
