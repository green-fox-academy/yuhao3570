abstract class Animal {
    name: string;
    age: number;
    gender: string;
    height: number;
    married: boolean;

    constructor(name: string, age: number = 2, gender: string = 'F', height: number = 1.2, married: boolean = false){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.married = married;
    }

    getName(): string{
        return this.name;
    }

    abstract breed(): string;
}

export default Animal;