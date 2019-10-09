'use strict';

if(document.querySelector('p:nth-child(4)').classList.contains('dolphin')){
    for(let e of document.getElementsByClassName('apple')) {
        e.innerText = 'pear';
    }
}

if(document.querySelector('p').classList.contains('apple')){
    for(let e of document.getElementsByClassName('cat')){
        e.innerText = 'dog';
    }
}

document.querySelectorAll('.apple').forEach(e => {
    e.classList.add('red');
})

document.querySelectorAll('.balloon').forEach(e => {
    e.setAttribute('style', 'border-radius: 5px')
})