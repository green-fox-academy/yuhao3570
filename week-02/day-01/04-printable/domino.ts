import Printable from './printable';

class Domino implements Printable {
    values: number[];

    constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
    }
  
    printAllFields(): void {
        console.log(`[${this.values[0]}|${this.values[1]}]`);
    }
}
  
export default Domino;