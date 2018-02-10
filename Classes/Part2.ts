class One {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name1: string): void {
        this.name = name1;
    }
    //getter
    set Name(name: string) {
        this.name = name;
    }
    //setter
    get Name(): string {
        return this.name;
    }
}

const O = new One('Uma Mahesh');
console.log(O.getName());//Uma Mahesh
O.setName('Hello World');
console.log(O.getName());//Hello World

console.log(O.Name);
O.Name = 'Welcome Boss';
console.log(O.Name);//Welcome Boss
