
const button = document.querySelector('button');

// 1. 
const buttonClick = (event) => {
    console.log(event.timeStamp);
    button.removeEventListener('click', buttonClick);
}

button.addEventListener('click', buttonClick);

// 2.
button.addEventListener('click', (event) => {
    console.log(event.timeStamp);    
}, { once: true });



