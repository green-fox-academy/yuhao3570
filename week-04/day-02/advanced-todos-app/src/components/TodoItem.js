import React from 'react';

class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete(){
        this.props.delete(this.props.item.name);
    }

    handleComplete(event){
        this.props.complete(this.props.item.name, event.target.checked);
    }

    render() {
        return (
            <div className="todo-item">
                <span>{this.props.item.name}</span>
                <button className="delete" onClick={this.handleDelete}></button>
                <input type="checkbox" checked={this.props.item.completed} onChange={this.handleComplete} />
            </div>
        );
    }
}

export default TodoItem;