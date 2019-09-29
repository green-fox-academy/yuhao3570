function generateMatrix() {
    let params = Array.from(arguments);
    return (params.length < 3) ? null : Array(params[0]).fill(Array(params[1]).fill(params[2]));
}
console.log(generateMatrix());
console.log(generateMatrix(7, 3, 0));