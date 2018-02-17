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