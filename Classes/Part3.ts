//Using Fat Array function
class Employee {
    constructor(private age: number) { }

    getAge(): number {
        return this.age;
    }

    getAge1 = (): number => this.age

    getAge2 = () => this.age

    growOld() {
        this.age++;
    }

    growOld1 = () => { this.age++ }

    growOld2 = () => this.age++

    sumOf(a: number, b: number): number {
        return a + b;
    }
    sumOf1 = (a: number, b: number) => { return a + b; }//default return type any and anonymouse function

    sumOf2 = (a: number, b: number) => a + b;//default return type any
}
const emp = new Employee(30);
console.log(emp.getAge());//30

emp.growOld();
console.log(emp.getAge());//31

emp.growOld1();
console.log(emp.getAge());//32

emp.growOld2();
console.log(emp.getAge());//33
console.log(emp.sumOf(10, 20));//30