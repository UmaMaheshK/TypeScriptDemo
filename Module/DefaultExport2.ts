const AllinOne = {
    name: () => console.log('default function'),
    add: (a: number, b: number) => a + b,
    Retrun() { return 10; },
    Employee: class {
        constructor(private name: string) {
            console.log(this.name);
        }
        getMyName = (): string => 'Uma Mahesh'
    }
}
export default AllinOne;