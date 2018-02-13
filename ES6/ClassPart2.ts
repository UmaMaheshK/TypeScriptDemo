//Inheritance
class A {
    protected doStuff() {
        console.log('Called from A');
    }
    public callDoStuff() {
        this.doStuff();
    }
}
class B extends A {
    protected doStuff() {
        super.doStuff();
        console.log('Called from B');
    }
}

let a: A = new A();
a.callDoStuff();//Called from A

let b: B = new B();
b.callDoStuff();//Called from A Called from B

class Animal {
    constructor(public name: string) { }
    sayName = () => console.log('Say from Animal Class')
}
class Dog extends Animal {
    sayName = () => console.log('Say from Dog Class\nname := ', this.name);
}
let animal: Animal = new Animal('Uma Mahesh');
animal.sayName();//Say from Animal Class

let dog: Dog = new Dog('Hi');
dog.sayName();//Say from Dog Class

let ani: Animal = new Dog('Uma Mahesh');
ani.sayName();//Say from Dog Class