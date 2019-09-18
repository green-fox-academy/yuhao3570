'use strict';

let phoneBook = new Map([
    ['William A. Lathan', '405-709-1865'],
    ['John K. Miller', '402-247-8568'],
    ['Hortensia E. Foster', '606-481-6467'],
    ['Amanda D. Newland', '319-243-5613'],
    ['Brooke P. Askew', '307-687-2982']
]);

// What is John K. Miller's phone number?
console.log(phoneBook.get('John K. Miller'));

// Whose phone number is 307-687-2982?
for(let [key, value] of phoneBook){
    if(value === '307-687-2982'){
        console.log(key);
        break;
    }
}

// Do we know Chris E. Myers' phone number?
console.log(phoneBook.has('Chris E. Myers'));

