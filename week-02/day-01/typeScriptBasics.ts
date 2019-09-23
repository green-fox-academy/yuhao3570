class Person{
    name: string;
    age: number;
    skills: string[];

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
        this.skills = [];
    }

    addSkill(skill: string) : void {
        this.skills.push(skill);
    }

    printName() : string{
        return `this person's name is ${this.name}`;
    }
}

const person1 = new Person('Hao', 28);
person1.addSkill('JS');
