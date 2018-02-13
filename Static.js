var demo = /** @class */ (function () {
    function demo() {
        demo.no++;
    }
    demo.no = 0;
    return demo;
}());
var n1 = new demo();
var n2 = new demo();
console.log('static value := ', demo.no);
