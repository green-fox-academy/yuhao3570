function coffee(sugar = false, milk = false){
    return `coffee${sugar? ' with sugar': ''}${sugar && milk? ' and': ''}${milk? ' with Milk': ''}`;
}

console.log(coffee());
console.log(coffee(true, false));
console.log(coffee(false, true));
console.log(coffee(true, true));