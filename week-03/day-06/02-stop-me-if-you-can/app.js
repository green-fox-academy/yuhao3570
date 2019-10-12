// 1.
// let timeout = setTimeout(() => {
//     alert('5 Seconds passed!');
// }, 5000);
// document.querySelector('#cancel').addEventListener('click', _ => {
//     clearTimeout(timeout);
// })

// 2. 
// new Promise(function(resolve, reject){
//     let timeout = setTimeout(() => {    
//         resolve(alert('5 Seconds passed!'));  
//     }, 5000);
//     document.querySelector('#cancel').addEventListener('click', _ => {
//         reject(clearTimeout(timeout));
//     })
// })

//3.
(async() => {
    await new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {    
            resolve(alert('5 Seconds passed!'));  
        }, 5000);
        document.querySelector('#cancel').addEventListener('click', _ => reject(clearTimeout(timeout)));
    }).catch(console.log('too early'))
})()

console.log('something');