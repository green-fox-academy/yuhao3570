const Person = require('./person');

function Sponsor(name, age, gender, company = 'Google', hiredStudents = 0){
    Person.call(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
}

Sponsor.prototype = Object.create(Person.prototype);

Sponsor.prototype.getGoal = function(){
    console.log('My goal is: Hire brilliant junior software developers.');
}

Sponsor.prototype.introduce = function(){
    return Person.prototype.introduce() + `who represents ${this.company} and hired ${this.hiredStudents} students so far.`
}

Sponsor.prototype.hire = function(){
    this.hiredStudents++;
}

module.exports = Sponsor;