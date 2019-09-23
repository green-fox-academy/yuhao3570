import Animal from 'C:/Users/Hao_Yu/Documents/epam-academy/yuhao3570/week-02/day-01/02-animals-in-the-zoo/animal';
import Flyable from './flyable';

class Bird extends Animal implements Flyable{
    breed(): string {
        return 'laying egg.'
    }
    
    land(): void {
        console.log('Landed on wire, beware of elec shock!');
    }    
    
    fly(): void {
        console.log('Fly to your left~~~');
    }
   
    takeOff(): void {
        console.log('Time to takeoff wow~~');
    }
}

export default Bird;