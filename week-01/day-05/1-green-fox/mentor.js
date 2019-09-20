const Person = require('./person');

function Mentor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate'){
    Person.call(name, age, gender);
    this.level = level;
}

Mentor.prototype = Object.create(Person.prototype);

Mentor.prototype.getGoal = function(){
    console.log('My goal is: Educate brilliant junior software developers.');
}

Mentor.prototype.introduce = function(){
    return Person.prototype.introduce() + ` ${this.level}`;
}

module.exports = Mentor;