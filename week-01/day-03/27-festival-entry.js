'use strict';

const watchlist = [];

let securityAlcholLoot = 0;

const queue = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];
console.log(queue[0]);

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(queue){
    queue.forEach(e => { 
        if(e.alcohol > 0){
            securityAlcholLoot += e.alcohol;
            if(e.guns > 0){
                watchlist.push(e.name);
                delete queue[queue.indexOf(e)];
            }else{
                e.alcohol = 0;
            }
        }else{
            if(e.guns > 0){
                watchlist.push(e.name);
                delete queue[queue.indexOf(e)];
            }
        }
    })
}
securityCheck(queue);
console.log(queue);
console.log(securityAlcholLoot);
module.exports = securityCheck;