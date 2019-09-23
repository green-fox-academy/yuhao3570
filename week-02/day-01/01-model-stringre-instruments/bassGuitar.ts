import StringedInstrument from './stringedInstrument';

class BassGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 4, name: string = 'Bass Guitar'){
        super(numberOfStrings, name);
    }

    sound(): string{
        return 'Duum-duum-duum';
    }
}

export default BassGuitar;