const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let today = new Date();
let date = days[today.getDay() - 1] + ' ' + months[today.getMonth() - 1] + ' ' + today.getDate() + ' ' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;
document.querySelector('#time').textContent = dateTime;

// eventlistener approach
/*
document.querySelector('button').addEventListener('click', _ => {
    document.querySelector('#reply .colored').textContent = (performance.now() / 1000).toFixed(2);
}) 
*/

// using promise
const start = Date.now();

async function buttonAction(button){
    let result = await new Promise(function(resolve){
        button.addEventListener('click', _ => resolve(Date.now()))
    })
    document.querySelector('#reply .colored').textContent = await  ((result - start)/1000).toFixed(2)
}

buttonAction(document.querySelector('button'))