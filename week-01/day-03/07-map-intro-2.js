'use strict';

//Create a map where the keys are strings and the values are strings with the following initial values
let myMap = new Map([
   [ '978-1-60309-452-8', 'A Letter to Jo'],
   ['978-1-60309-459-7', 'Lupus'],
   [ '978-1-60309-444-3','Red Panda and Moon Bear'],
   ['978-1-60309-461-0', 'The Lab']
])

// Print all the key-value pairs in the following format
myMap.forEach((value, key) => {
    console.log(`${value} (ISBN: ${key})`);
})

// Remove the key-value pair with key 978-1-60309-444-3
myMap.delete('978-1-60309-444-3');

// Remove the key-value pair with value The Lab
for (let entry of myMap){
    if (entry[1] === 'The Lab'){
        myMap.delete(entry[0]);
        break;
    }
}

// Add the following key-value pairs to the map
myMap.set('978-1-60309-450-4','They Called Us Enemy');
myMap.set('978-1-60309-453-5','Why Did We Trust Him?');

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(myMap.has('478-0-61159-424-8'));

//Print the value associated with key 978-1-60309-453-5
console.log(myMap.get('978-1-60309-453-5'));