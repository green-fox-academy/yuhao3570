import Printable from './printable';

class Todo implements Printable{
    id: number;
    content: string;
    
    constructor(id: number, content: string){
        this.id = id;
        this.content = content;
    }
    
    printAllFields(): void {
        console.log(`TODO ${this.id}: ${this.content}`);
    }
}

export default Todo;