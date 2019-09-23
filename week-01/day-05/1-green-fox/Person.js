function Person(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.getGoal = function(){
    console.log('My goal is: Live for the moment!');
}

Person.prototype.introduce = function(){
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`;
}

module.exports = Person;