function multiPurposeFunction(action) {
    if (action) {
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));
    }
}

function frameFunction() {
    // Write your code here
    let action1 = function (param1, param2) {
        return param1 === '' ? param2 : param1 + ' ' + param2;
    }

    multiPurposeFunction(action1);
}

frameFunction();