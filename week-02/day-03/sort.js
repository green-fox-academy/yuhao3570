'use strict';

let array = randomArray(10);
console.log('-----Original-----');
console.log(array);
console.log('----Merge Sort----');
console.log(mergeSort(array));

console.log('------BS Sort----');
console.log(bsSort(array));


function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
}

function mergeSort(array) {
    if (array.length > 1) {
        let mid = Math.floor(array.length / 2);
        return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
    }
    return array;
}

function merge(left, right) {
    let merged = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }
    while (left.length)
        merged.push(left.shift());
    while (right.length)
        merged.push(right.shift());
    return merged;
}

function bsSort(array) {
    let pos;
    let resultArr = [];
    if(array.length >= 1){
        resultArr.push(array[0]);
    }
    for(let i = 1; i < array.length; i++){
        pos = bsSearch(array[i], resultArr, 0, i - 1);
        resultArr.splice(pos, 0, array[i]);
    }
    return resultArr;
}

function bsSearch(num, array, start, end) {
    
    // console.log(`inseide search at ${num}`, start, end);

    if (end <= start) {
        return (num > array[start])?  start+1 : start; 
    }

    let mid = Math.floor((start + end)/2); 
    if(num == array[mid])
        return mid+1; 

    if(num > array[mid]){
        return bsSearch(num, array, mid+1, end); 
    }
    return bsSearch(num, array, start, mid-1); 
}

function randomArray(length) {
    return [...Array(length)].map(_ => Math.floor(Math.random() * length * 10));
}