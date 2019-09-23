import StringedInstrument from './stringedInstrument';

class Violin extends StringedInstrument{
    constructor(numberOfStrings: number = 4, name: string = 'Violin'){
        super(numberOfStrings, name);
    }

    sound(): string{
        return 'Screech';
    }
}

export default Violin;