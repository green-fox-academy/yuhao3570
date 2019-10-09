'use strict';

let lis = document.getElementsByTagName('li');
let content = ['apple', 'banana', 'cat', 'dog'];

for(let i = 0; i < lis.length; i++){
    lis[i].innerText = content[i];
}

document.getElementsByTagName('ul')[0].classList.add("colored");

