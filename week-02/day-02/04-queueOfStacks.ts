import Queue from './ds interfaces/queue';
import ArrayStack from './01-arrayStack';
import StackNodal from './03-stackNodal';

class QueueOfStacks implements Queue<string>{
    org_stack: ArrayStack<string>;
    backup_stack: StackNodal;
    count: number;

    constructor(){
        this.org_stack = new ArrayStack<string>();
        this.backup_stack = new StackNodal();
        this.count = 0;
    }
    empty(): boolean {
        return this.count === 0;    
    }

    peek(): string {
        for(let i = 0; i < this.count; i++){
            this.backup_stack.push(this.org_stack.pop());
        }

        let value = this.backup_stack.peek();

        for(let i = 0; i < this.count; i++){
            this.org_stack.push(this.backup_stack.pop());
        }
        return value;
    }

    add(value: string): void {
        this.org_stack.push(value);
        this.count++;
    }

    remove(): string {
        for(let i = 0; i < this.count; i++){
            this.backup_stack.push(this.org_stack.pop());
        }
        let value = this.backup_stack.pop();
        this.count--;
        for(let i = 0; i < this.count; i++){
            this.org_stack.push(this.backup_stack.pop());
        }
        return value;
    }
}

export default QueueOfStacks;