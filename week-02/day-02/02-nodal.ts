class Nodal{
    value: string;
    next: Nodal;

    constructor(value?: string){
        this.value = value;;
        this.next = null;
    }
}

export default Nodal;