class Garden{
    constructor(width, length){
        this.width = width;
        this.length = length;
    }

    area(){
        return this.width * this.length;
    }

    circumference(){
        return 2 * (this.width + this.length);
    }

    efficiency(){
        return this.area() / this.circumference();
    }
}


let gar = new Garden(10, 5);

console.log(gar.area());
console.log(gar.circumference());
console.log(gar.efficiency());