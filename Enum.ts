//Exp1
enum weekDays {
    Sunday,         //0
    Monday,         //1
    Tuesday,        //2
    Wednesday,      //3
    Thursday,       //4
    Friday,         //5
    Saturday        //6
}

console.log(weekDays.Friday);//5
console.log(weekDays[weekDays.Friday])//Friday
console.log(weekDays[1])//Monday
//Exp2
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(nameOfA);

//Exp3
enum weekDays1 {
    Sunday = 1, //1
    Monday,     //2
    Tuesday,    //3
    Wednesday,  //4
    Thursday,   //5
    Friday,     //6
    Saturday    //7
}
console.log(weekDays1.Sunday)//1
console.log(weekDays1.Saturday)//7

//Exp4 string enum

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction.Down);//DOWN

//Exp5
function getValue() {
    return 100;
}

let num: number = 10;
enum MyValues {
    X = getValue(),
    A = num,
    B = 1,
    C
}
//MyValues.X = 123; cannot assign value to const
console.log(MyValues.A);//10
console.log(MyValues.B);//1
console.log(MyValues.C);//2
console.log(MyValues.X);//100

let values = [MyValues.A, MyValues.B, MyValues.C, MyValues.X];
console.log(values);

//Exp6
enum AllInOne {
    A = 10,
    Name = "Uma Mahesh"
}
console.log(AllInOne.A)//10
console.log(AllInOne.Name)//Uma Mahesh

//Exp7
enum FeedBack {
    Excellent,
    Good,
    fair,
    Poor
}
function GetFeedBack(E: FeedBack) {
    if (E == FeedBack.Excellent)
        console.log('Result := ', FeedBack[FeedBack.Excellent]);
}
GetFeedBack(FeedBack.Excellent);

//Exp8
let m = 123;

const enum Directions {
    //UP = m,//Cannot assing variable values
    DOWN,
    LEFT,
    RIGHT,
    BOTTOM
}