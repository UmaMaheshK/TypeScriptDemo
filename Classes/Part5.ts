class Two {
    readonly name: string;
    readonly id: number = 100;
    //const salary: number = 90000;
    //let age: number = 30;
    constructor(name: string) {
        this.name = name;
    }
    getId = () => this.id;
    getName = () => this.name;
}

let out = new Two('Uma Mahesh');
console.log(typeof out);//object

console.log(out.id);
console.log(out.name);

console.log(out.getId());
console.log(out.getName());