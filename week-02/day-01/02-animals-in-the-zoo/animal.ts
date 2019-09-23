abstract class Animal {
    name: string;
    age: number;
    gender: string;
    height: number;
    married: boolean;

    constructor(name: string, age: number, gender: string, height: number, married: boolean;){
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