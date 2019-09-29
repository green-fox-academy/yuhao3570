function avg(array) {
    const count = array.length;

    let sum = array.reduce((a, b) => (a + b), 0);

    return sum / count;
}

console.log(avg([1, 2, 3, 4, 5, 6]));