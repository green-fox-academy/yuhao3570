const Garden =  function(width, length){
    this.width =width;
    this.length = length;
}

Garden.prototype.area = function(){
    return this.width * this.length;
}

Garden.prototype.circumference = function(){
    return (this.width + this.length) * 2;
}

Garden.prototype.efficiency = function(){
    return this.area() / this.circumference();
}

let gar = new Garden(10, 5);

console.log(gar.area());
console.log(gar.circumference());
console.log(gar.efficiency());
