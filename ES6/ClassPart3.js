class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}
let cp = new ColorPoint(10, 20, 'red');
console.log(cp.toString());

//Exp2

class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static StaticMethod() {
        return 'static Method';
    }
    PrototypeMethod() {
        return 'Prototype method';
    }
}
let f = new Foo(100);
console.log(f.PrototypeMethod());
console.log(Foo.StaticMethod());

//Getter and Setter
//Exp3
class MyClass {
    get Prop() {
        return 'Getter';
    }
    set Prop(val) {
        console.log('setter := ', val);
    }
}