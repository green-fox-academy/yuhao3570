import StringedInstrument from './stringedInstrument';

class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 6, name: string = 'Electric Guitar'){
        super(numberOfStrings, name);
    }

    sound(): string{
        return 'Twang';
    }
}

export default ElectricGuitar;