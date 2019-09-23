import Instrument from './instrument';

abstract class StringedInstrument extends Instrument{
    numberOfStrings: number;
    constructor(numberOfStrings: number, name: string){
        super(name);
        this.numberOfStrings = numberOfStrings;
    }
    abstract sound(): string;

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

export default StringedInstrument;