// method 1
/*
setTimeout(() => {
    alert('5 Seconds passed!');
}, 5000);
*/

document.querySelector('#cancel').addEventListener('click', _ => {
    alert = () => {};
})

//2. 
/*
const promise = new Promise(function(resolve){
    document.querySelector('#cancel').addEventListener('click', _ => {
        resolve(() => {});
    })
})

setTimeout(() => {
    promise.then(res => alert = res)
    alert('5 Seconds passed!');
}, 5000);
*/

//3.
(async() => {
    await setTimeout(() => {
        alert('5 Seconds passed!');
    }, 5000);
    document.querySelector('#cancel').addEventListener('click',_ => (alert = () => {}))
})()




