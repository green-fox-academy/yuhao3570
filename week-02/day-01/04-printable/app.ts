import Domino from './domino';
import Todo from './todo';

let dominoes: Domino[] = [];
let todos: Todo[] = [];

dominoes.push(new Domino(1, 2));
dominoes.push(new Domino(2, 3));
dominoes.push(new Domino(3, 4));
dominoes.push(new Domino(4, 5));
dominoes.push(new Domino(5, 6));
dominoes.push(new Domino(6, 7));

todos.push(new Todo(1, 'eat'));
todos.push(new Todo(2, 'drink'));
todos.push(new Todo(3, 'sleep'));
todos.push(new Todo(4, 'work'));
todos.push(new Todo(5, 'pee'));
todos.push(new Todo(6, 'draw'));

for (let domino of dominoes) {
    domino.printAllFields();
}
  
for (let todo of todos) {
    todo.printAllFields();
}