interface Queue<T> {
    empty(): boolean;
    peek(): T;
    add(value: T): void;
    remove(): T;
}

export default Queue;