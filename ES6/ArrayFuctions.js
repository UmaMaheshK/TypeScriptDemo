let sumOf = function (a, b) {
    return a + b;
}
console.log(sumOf(10, 20));//30

let sumOf1 = (a, b) => console.log(a + b)
sumOf1(10, 20);//30

let sumOf2 = (a, b) => { console.log(a + b); }
sumOf2(10, 20);//30

let m = 5;
let sumOf3 = (a, b) => { console.log(m + a + b); }
sumOf3(10, 20);//30

let single = x => console.log(x)
single(100);//100

let single1 = (x) => console.log(x)
single1(200);//200

let empty = () => console.log('Welcome')
empty();//Welcome

let sample = () => ({ id: 500 })
console.log(sample().id);//500

function employee(age) {
    this.age = age;
    this.incrementAge = function () {
        this.age++;
    }
}

let fn = new employee(10);
console.log('Age: =', fn.age);//10
fn.incrementAge();
console.log('Age: =', fn.age);//11

function employee1(age) {
    this.age = age;
    this.incrementAge = () => { this.age++; }
}

let fn1 = new employee1(10);
console.log('Age: =', fn1.age);//10
fn1.incrementAge();
console.log('Age: =', fn1.age);//11
