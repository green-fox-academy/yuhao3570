const Person = require('./person');

<<<<<<< HEAD
function Sponsor(name , age , gender , company = 'Google', hiredStudents = 0){
=======
function Sponsor(name, age, gender, company = 'Google', hiredStudents = 0){
>>>>>>> f52fec16a3105e00d93372522ae7d84e11d1f17d
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