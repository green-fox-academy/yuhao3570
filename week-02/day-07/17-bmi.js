function bmi(obj) {
    obj['bmi'] = obj.mass / (obj.height * obj.height);
    console.log(obj['bmi'])
    return obj;
}

const obj = {
    mass: 60,
    height: 1.8
}

console.log(bmi(obj));