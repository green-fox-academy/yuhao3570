// 1.
let king = b325.innerText;
console.log(king);

let businessMan = document.getElementsByTagName('p')[0].innerText;
let lampLghter = document.querySelectorAll('div:last-of-type')[1].innerText;
let conceitedMan = document.querySelector('div:nth-child(2)').innerText;

console.log("-----1-----");
console.log(king);

// 2. 
let businessLamp =[businessMan, lampLghter];
console.log("----------");
businessLamp.forEach(e => console.log(e));

// 3. 
let conceitedKing = [king, conceitedMan];
conceitedKing.forEach(alert);


// 4
let noBussiness = [king, conceitedMan, lampLghter];
console.log("-----4-----");
noBussiness.forEach(e => console.log(e));
