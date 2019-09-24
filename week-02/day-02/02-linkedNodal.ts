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

let myLinkedList = new LinkedNodal();
console.log("ONE:", myLinkedList);

console.log('-----Test add-----')
myLinkedList.add('a');
myLinkedList.add('b', 1);
myLinkedList.add('c', 2);
myLinkedList.add('d', 3);
myLinkedList.add('e', 4);
myLinkedList.add('f', 5);


console.log("After add", myLinkedList);
myLinkedList.printAll();

console.log('-----Test get()-----')
console.log(myLinkedList.get(3));

console.log('-----Test removeItem()-----')
myLinkedList.removeItem('d');
myLinkedList.printAll();

console.log('-----Test add to middle-----')
myLinkedList.add('new', 2);
myLinkedList.printAll();

console.log('-----Test remove() by index----')
myLinkedList.remove(2);
myLinkedList.printAll();