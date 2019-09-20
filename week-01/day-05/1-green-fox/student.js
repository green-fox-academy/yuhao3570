const Person = require('./person');

function Student(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life', skippedDays = 0){
    Person.call(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.getGoal = function(){
    console.log( 'My goal is: Be a junior software developer.');
}

Student.prototype.introduce =  function(){
    return Person.prototype.introduce() + ` from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`
}

Student.prototype.skipDays = function(numberOfDays){
    this.skippedDays += numberOfDays;
}

module.exports = Student;