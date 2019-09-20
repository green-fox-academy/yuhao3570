function Cohort(name){
    this.name = name;
    this.students = [];
    this.mentors = [];
}

Cohort.prototype.addStudent = function(student){
    this.students.push(student);
}

Cohort.prototype.addMentor = function(mentor){
    this.mentors.push(mentor);
}

Cohort.prototype.info = function(){
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
}

module.exports = Cohort;

