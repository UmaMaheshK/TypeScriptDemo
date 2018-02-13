class demo {
    static no: number = 0;
    constructor() {
        demo.no++;
    }
}
let n1 = new demo();//1
let n2 = new demo();//2
console.log('static value := ', demo.no);//2