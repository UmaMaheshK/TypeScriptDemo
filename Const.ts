//Const used for variable declaretion only

const num1: number = 100;
console.log(num1);//100
//num1 = 200; cannot reasign value to constant or readonly.

//const sam: number; constant must be initialized
const obj = {
    name: 'Uma',
    id: 100
}
obj.id = 101;//allowed
console.log(obj.id);//101

//obj = { name: '123', id: 10 }// ERROR : connot assign to 'obj because it is constant.