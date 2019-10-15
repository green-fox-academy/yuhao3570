import React from 'react';
import Input from './Input';
import TodoItem from './TodoItem';

class Todos extends React.Component{

    constructor(){
        super();
        this.state = {
            todos: []
        }

        this.addTodoFromInput = this.addTodoFromInput.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodoFromInput(input){
        this.setState({
            todos: [...this.state.todos, {name: input, completed: false}]
        })
    }

    deleteTodo(name){
        this.setState({todos: this.state.todos.filter((todo) => todo.name !== name)});
    }

    completeTodo(name, checked){
        this.state.todos.find((todo) => todo.name === name)

        let tempTodos = this.state.todos;
        tempTodos.find((todo) => todo.name === name).completed = checked;

        this.setState(tempTodos);
    }
    
    render(){
        return(
            <div className="todos">
                <div className="heading">
                    TODOS
                </div>
                <div className="input">
                    <Input addTodo={this.addTodoFromInput}/>
                </div>

                <div className="details">
                    {this.state.todos.map(todo => <TodoItem item={todo} delete={this.deleteTodo} complete={this.completeTodo}/>)}
                </div>
            </div>
        );      
    }
}

export default Todos;