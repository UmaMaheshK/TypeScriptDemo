class First {
    constructor() {
        console.log('Welcome to classes');
    }
}

let f = new First();//Welcome to classes

class Second {
    private a: number;
    private name: string;
    constructor(id: number, name: string) {
        this.a = id;
        this.name = name;
    }
    //method with default return type void
    displayData() {
        console.log(`a:=${this.a}\nname:=${this.name}`);
    }
}

const s = new Second(100, 'Uma Mahesh');
s.displayData();

class Three {
    //Note id and name is not accessiable in local and outside
    constructor(id: number, name: string) {
        console.log(`id:=${id}\nname:=${name}`);
    }

    getData(): string {
        return 'Welcome';
    }
}
const t = new Three(120, 'Uma');
console.log(t.getData());//Welcome

class Four {
    constructor(private id: number, private name: string) {
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}
const fo = new Four(130, 'Hello');
console.log(fo.getId());//130
console.log(fo.getName());//Hello

class Fifth {
    constructor(private id: number, private name: string = 'Suma Latha') { }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}
let F = new Fifth(111);
console.log(F.getId());//111
console.log(F.getName());//Suma Latha

F = new Fifth(100, 'Mahesh');
console.log(F.getId());//100
console.log(F.getName());//Mahesh

//Class Expressions without name class
let Sixth = class {
    constructor(private id: number, private name: string) { }
    getData(): string {
        return `id:=${this.id}\nname:= ${this.name}`;
    }
}
const S = new Sixth(100, 'Hi World');
console.log(S.getData());


//Class Expressions with name class
let Seventh = class Sixth {
    constructor(private id: number, private name: string) { }
    getData(): string {
        return `id:=${this.id}\nname:= ${this.name}`;
    }
}
var Sev = new Seventh(100, 'Hi World');
console.log(Sev.getData());
//console.log(Sev.name);