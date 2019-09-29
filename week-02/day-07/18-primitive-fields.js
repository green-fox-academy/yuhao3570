function primitiveFields(obj) {
    let targetKeys = [];
    Object.entries(obj).forEach(e => {
        if (isPrimitive(e[1])) {
            targetKeys.push(e[0]);
        }
    });

    return targetKeys;
}

function isPrimitive(type) {
    return ['string', 'undefined', 'number', 'null', 'symbol', 'boolean'].includes(typeof type);
}

console.log(primitiveFields({
    x: 1,
    y: true,
    z: []
}));