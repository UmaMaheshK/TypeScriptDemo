var First = /** @class */ (function () {
    function First() {
        console.log('Welcome to classes');
    }
    return First;
}());
var f = new First(); //Welcome to classes
var Second = /** @class */ (function () {
    function Second(id, name) {
        this.a = id;
        this.name = name;
    }
    //method with default return type void
    Second.prototype.displayData = function () {
        console.log("a:=" + this.a + "\nname:=" + this.name);
    };
    return Second;
}());
var s = new Second(100, 'Uma Mahesh');
s.displayData();
var Three = /** @class */ (function () {
    //Note id and name is not accessiable in local and outside
    function Three(id, name) {
        console.log("id:=" + id + "\nname:=" + name);
    }
    Three.prototype.getData = function () {
        return 'Welcome';
    };
    return Three;
}());
var t = new Three(120, 'Uma');
console.log(t.getData()); //Welcome
var Four = /** @class */ (function () {
    function Four(id, name) {
        this.id = id;
        this.name = name;
    }
    Four.prototype.getId = function () {
        return this.id;
    };
    Four.prototype.getName = function () {
        return this.name;
    };
    return Four;
}());
var fo = new Four(130, 'Hello');
console.log(fo.getId()); //130
console.log(fo.getName()); //Hello
var Fifth = /** @class */ (function () {
    function Fifth(id, name) {
        if (name === void 0) { name = 'Suma Latha'; }
        this.id = id;
        this.name = name;
    }
    Fifth.prototype.getId = function () {
        return this.id;
    };
    Fifth.prototype.getName = function () {
        return this.name;
    };
    return Fifth;
}());
var F = new Fifth(111);
console.log(F.getId()); //111
console.log(F.getName()); //Suma Latha
F = new Fifth(100, 'Mahesh');
console.log(F.getId()); //100
console.log(F.getName()); //Mahesh
//Class Expressions
var Sixth = /** @class */ (function () {
    function class_1(id, name) {
        this.id = id;
        this.name = name;
    }
    class_1.prototype.getData = function () {
        return "id:=" + this.id + "\nname:= " + this.name;
    };
    return class_1;
}());
var S = new Sixth(100, 'Hi World');
console.log(S.getData());
