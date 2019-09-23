import Animal from './animal';

class Mammal extends Animal{
    constructor(name: string, age?: number, gender?: string, height?: number, married?: boolean){
        super(name, age, gender, height, married);
    }

    breed(): string{
        return 'pushing miniature versions out.';
    }
}

export default Mammal;