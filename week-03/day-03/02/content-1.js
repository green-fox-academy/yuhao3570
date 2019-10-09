// 1.
// let content = document.querySelector('p:last-of-type').innerText;
// console.log(content);
// for(e of document.getElementsByTagName('p')){
//     e.innerText = content;
// }

//2.
let content2 = document.querySelector('p:last-of-type').innerHTML;
console.log(content2);
for(e of document.getElementsByTagName('p')){
    e.innerHTML = content2;
}

