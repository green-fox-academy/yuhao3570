const data = [5,1,2,9,7,3,8];

function max(array){
    let max = array[0];

    for(let e of array){
        if(e > max){
            max = e;
        }
    }
    return max;
}

console.log(max(data));