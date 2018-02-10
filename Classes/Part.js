//class expression
let result = class {
    constructor(name) {
        console.log('class expression');
        this.name1 = name;
    }
    getName() {
        return this.name1;
    }
}
const t = new result('Uma Mahesh');

console.log(t.getName());//Uma Mahesh
console.log(t.name);

//creating variables
let result1 = class emp {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
