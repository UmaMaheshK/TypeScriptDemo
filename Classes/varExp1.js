(function () {
    var name = 'Hello';
    console.log(name);//Hello
})();

var name1 = 'Uma';
(
    function () {
        var name1 = 'Mahesh';
    }
)();
console.log(name1);//Uma

function Hello() {
    var result = 123;
    if (true) {
        var result = 100;
    }
    console.log(result);//100
}
Hello();

function hello1() {
    var result = 123;
    if (true) {
        let result = 100;
    }
    console.log(result);//123
}