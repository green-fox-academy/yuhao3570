function carWrapper(model, color, year, doors, specPropName, specPropValue){
    // the function should create and return an object with assigning the model, 
    // color year and doors to properties with the same name as the variable 
    // and it should assign to the specPropName named property the specPropValue
    

    //before ES6
    var result = {
        model: model,
        color: color,
        year: year,
        doors: doors,
    }
    result[specPropName]=specPropValue;
    return result;

    //Since ES6
    return {
        model,
        color,
        year,
        doors,
        [specPropName]: specPropValue
    }
}

console.log(JSON.stringify(carWrapper('Benz','black',1886,0,'historical',true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}