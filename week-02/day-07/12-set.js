class Data{
    constructor(length = 0){
        this.length = length;
        this.array = new Array(this.length);
    }

    add(value){
        for(let item of this.array){
            if(value === item){
                return this;
            }
        }

        this.array.push(value);
        return this;
    }

    read(){
        for(let item of this.array){
            console.log(item);
        }
    }
}

const set = new Data();
set.add(10).add(20).add(10).add(30);
set.read();