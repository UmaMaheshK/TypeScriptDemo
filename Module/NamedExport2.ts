const myName = 'Uma Mahesh';
function displayName() {
    return myName;
}
class Emp {
    constructor(private name: string, private id: number) { }
    get Name() { return this.Name; }
    set Name(val: string) { this.name = val; }
}
export { myName, displayName, Emp };