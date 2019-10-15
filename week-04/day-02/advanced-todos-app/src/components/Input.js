import React from 'react';

class Input extends React.Component{

    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(){
        let inputedValue = document.querySelector('input').value;
        if(inputedValue.length > 3){
            this.props.addTodo(inputedValue);
            document.querySelector('input').value = '';
        }else{
            alert('Inputed value must be longer than 3 characters!')
        }
    }

    render(){
        return (
            <div>
                <input type="text"/><button type='submit' onClick={this.handleInput}>ADD</button>
            </div>
        );
    }
}

export default Input;