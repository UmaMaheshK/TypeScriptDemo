//Using break statements
//break
var n = 10;
for (var index = 0; index < 10; index++) {
    if (index < 5)
        console.log(index);
    else
        break;
}
var count = 0;
for (var index = 0; index < 10; index++) {
    if (index % 2 == 0) {
        count++;
        continue;
    }
}
console.log('Event Numbers count:= ', count);
