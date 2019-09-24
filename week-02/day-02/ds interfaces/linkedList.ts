interface LinkedList {
    add(value: string): void;
    add(index: number, value: string): void;
    get(index: number): string;
    remove(value: string): void;
    remove(index: number): string;
    size(): number;
}

export default LinkedList;