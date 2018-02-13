class Point {
    x: number;//default public
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
let p1 = new Point(10, 20);
let p2 = new Point(1, 2);
let p3 = p1.add(p2);
console.log(p3.x)//11
console.log(p3.y)//22

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    add(point: Point3D) {
        let point2D = super.add(new Point(point.x, point.y));
        return new Point3D(point2D.x + point.x, point2D.y + point.y, this.z + point.z);
    }
}

class fooBase {
    private x: number;
    protected y: number;
    public z: number;
    name: string;
}
let f = new fooBase();

console.log(f.name);//undefined
console.log(f.z)//undefined

f.name = 'uma';
f.z = 123;

console.log(f.name);//uma
console.log(f.z)//123