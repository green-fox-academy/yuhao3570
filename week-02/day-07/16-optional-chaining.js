// const obj = {};
// console.log(obj.x.y); // this will throw an error


const obj = {
    x: {
        y: 10
    }
};

if (obj && obj.x) {
    console.log(obj.x.y);
} else {
    console.log(undefined);
}