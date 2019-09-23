import Reservationy from './reservationy';

class Reservation implements Reservationy{
    getDowBooking(): string {
        let dow = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

        return dow[Math.floor(Math.random() * 7)];
    }    
    
    getCodeBooking(): string {

        let list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result: string = '';

        for( let i = 0; i < 8; i++){
            result += list.charAt(Math.floor(Math.random() * 36));
        }

        return result;
    }

    print(): void {
        console.log(`Booking # ${this.getCodeBooking()} for ${this.getDowBooking()}`);
    }
}

export default Reservation;