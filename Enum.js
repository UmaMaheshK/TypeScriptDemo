//Exp1
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Sunday"] = 0] = "Sunday";
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday"; //6
})(weekDays || (weekDays = {}));
console.log(weekDays.Friday); //5
console.log(weekDays[weekDays.Friday]); //Friday
console.log(weekDays[1]); //Monday
//Exp2
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
console.log(nameOfA);
//Exp3
var weekDays1;
(function (weekDays1) {
    weekDays1[weekDays1["Sunday"] = 1] = "Sunday";
    weekDays1[weekDays1["Monday"] = 2] = "Monday";
    weekDays1[weekDays1["Tuesday"] = 3] = "Tuesday";
    weekDays1[weekDays1["Wednesday"] = 4] = "Wednesday";
    weekDays1[weekDays1["Thursday"] = 5] = "Thursday";
    weekDays1[weekDays1["Friday"] = 6] = "Friday";
    weekDays1[weekDays1["Saturday"] = 7] = "Saturday"; //7
})(weekDays1 || (weekDays1 = {}));
console.log(weekDays1.Sunday); //1
console.log(weekDays1.Saturday); //7
//Exp4 string enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Down); //DOWN
//Exp5
function getValue() {
    return 100;
}
var num = 10;
var MyValues;
(function (MyValues) {
    MyValues[MyValues["X"] = getValue()] = "X";
    MyValues[MyValues["A"] = num] = "A";
    MyValues[MyValues["B"] = 1] = "B";
    MyValues[MyValues["C"] = 2] = "C";
})(MyValues || (MyValues = {}));
//MyValues.X = 123; cannot assign value to const
console.log(MyValues.A); //10
console.log(MyValues.B); //1
console.log(MyValues.C); //2
console.log(MyValues.X); //100
var values = [MyValues.A, MyValues.B, MyValues.C, MyValues.X];
console.log(values);
//Exp6
var AllInOne;
(function (AllInOne) {
    AllInOne[AllInOne["A"] = 10] = "A";
    AllInOne["Name"] = "Uma Mahesh";
})(AllInOne || (AllInOne = {}));
console.log(AllInOne.A); //10
console.log(AllInOne.Name); //Uma Mahesh
//Exp7
var FeedBack;
(function (FeedBack) {
    FeedBack[FeedBack["Excellent"] = 0] = "Excellent";
    FeedBack[FeedBack["Good"] = 1] = "Good";
    FeedBack[FeedBack["fair"] = 2] = "fair";
    FeedBack[FeedBack["Poor"] = 3] = "Poor";
})(FeedBack || (FeedBack = {}));
function GetFeedBack(E) {
    if (E == FeedBack.Excellent)
        console.log('Result := ', FeedBack[FeedBack.Excellent]);
}
GetFeedBack(FeedBack.Excellent);
