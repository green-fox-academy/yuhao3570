function max(obj) {
    return Object.entries(obj).reduce((max, e) => e[1] < max[1] ? max : e);
}

let a = {
    'a': 10,
    'b': 110,
    'c': 10,
    'd': 15,
    'e': 1,
    'f': 9,
}

console.log(max(a));