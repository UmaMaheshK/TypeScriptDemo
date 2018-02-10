var result = 'Uma Mahesh';
var res = 'Hello Wolrd';
var temp = 12345;
console.log(result);
console.log(res);
console.log(temp);
var name1 = 'Welcome';
var name2;
var name3;
var name4 = 'Hello';
function displayData(config) {
    console.log(config.Id + "\n" + config.salary);
    //Here you connot assign any value beause it is readonly/const
    //config.Id=200;
}
var config = { Id: 123, salary: 90000 };
displayData(config);
var emp1 = { Id: 100, Name: 'Uma Mahesh' };
console.log(emp1.Id); //100;
console.log(emp1.Name); //Uma Mahesh';
//you cannot assign readonly properties
//emp1.Id = 120;
//emp1.Name = 'Hello';
//Multiple variables in single let
var a = 'Uma', b = 1234, c = true;
console.log(a);
console.log(b);
console.log(c);
