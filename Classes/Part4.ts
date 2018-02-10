var result = 'Uma Mahesh';
let res = 'Hello Wolrd';
const temp = 12345;

console.log(result);
console.log(res);
console.log(temp);


let name1: string = 'Welcome';
let name2: string;
let name3;
let name4 = 'Hello';

function displayData(config: { readonly Id: number, readonly salary: number }) {
    console.log(`${config.Id}\n${config.salary}`)
    //Here you connot assign any value beause it is readonly/const
    //config.Id=200;
}

let config = { Id: 123, salary: 90000 };
displayData(config);

type employee = {
    readonly Id: number,
    readonly Name: string
}

let emp1: employee = { Id: 100, Name: 'Uma Mahesh' };
console.log(emp1.Id)//100;
console.log(emp1.Name)//Uma Mahesh';
//you cannot assign readonly properties
//emp1.Id = 120;
//emp1.Name = 'Hello';

//Multiple variables in single let
let a: string = 'Uma', b: number = 1234, c: boolean = true;
console.log(a);
console.log(b);
console.log(c);

//Multiple let variable in function
function hello() {
    let l, m, n;
}

class test {
    readonly id: number = 100;

    getData = () => this.id;
}

console.log(new test().getData());//100
console.log(new test().id);//100