import Animal from './animal';

class Bird extends Animal{
    constructor(name: string, age?: number, gender?: string, height?: number, married?: boolean){
        super(name, age, gender, height, married)
    }

    breed(): string{
        return 'laying eggs.';
    }
}

export default Bird;