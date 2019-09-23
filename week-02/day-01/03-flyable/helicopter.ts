import Vehicle from './vehicle';
import Flyable from './flyable';

class Helicopter extends Vehicle implements Flyable{
   
    land(): void {
        console.log('Landed successfully!');
    }    
    
    fly(): void {
        console.log('Flying above cloud now');
    }

    takeOff(): void {
        console.log('Please fasten youor seatbelt, we\'re gonna take off!');
    }

    startEngine(): void {
        console.log('Turing on Engine!');    
    }

    refill(): void {
        console.log('Refilling fuel now!');
    }

    park(): void {
        console.log('Nice parallel parking Sir.');
    }
}

export default Helicopter;