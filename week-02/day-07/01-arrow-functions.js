function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
    // multiPurposeFunction(exampleNonAnonymFunction());
    // write your code here
    let example1 = function(param){
        return param * param;
    }

    let example2 = (param) => {
        return param * param;
    }

    multiPurposeFunction(example1);
    multiPurposeFunction(example2);
}

frameFunction();