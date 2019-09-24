import Nodal from './02-nodal';
import LinkedList from './ds interfaces/linkedList';

class LinkedNodal implements LinkedList {

    front: Nodal;
    end: Nodal;
    count: number;

    constructor(){
        this.front = new Nodal();
        this.end = this.front;
        this.count = 0;
    }

    add(value: string, index?: number): void{

        if(this.count === 0){
            this.front.next = new Nodal(value);
            this.end = this.front.next;
        }
        else if(index === undefined || index >= this.count || index < 0){
            //append to end
            let temp = new Nodal(value);
            this.end.next = temp;
            this.end = temp;
        }
        else{
            //insert into the index place
            let current = this.front;
            for(let i = 0; i < index; i++){
                current = current.next;
            }
            let temp = current.next;
            current.next = new Nodal(value);
            current.next.next = temp;
        }
        this.count++;
    }    

    get(index: number): string {
        let current = this.front;
        for(let i = 0; i <= index; i++){
            current = current.next;
        }
        return current.value;
    }

    removeItem(value: string): void{
        let current = this.front;
        for(let i = 0; i < this.count-1; i++){
            if(current.next.value === value){
                current.next = current.next.next;
            }
            current = current.next;
        }
        this.count--;
    }

    remove(index: number): string{
        let current = this.front;
        let value: string;

        if(index < this.count && index >= 0){
            for(let i = 0; i < index; i++){
                current = current.next;
            };
            value = current.next.value;
            current.next = current.next.next;
            this.count--;
        }else{
            console.log('Index out of range!')
        }
        return value;
    }
  
    size(): number {
        return this.count;
    }

    printAll(){
        let current = this.front.next;
        for(let i = 0; i < this.count; i++){
            console.log(`${i}: ${current.value}`);
            current = current.next;
        }
    }
}
export default LinkedNodal;