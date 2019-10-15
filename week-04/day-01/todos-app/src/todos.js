import React from 'react';

class Todos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todo: [
                {
                  text: 'Feed the monkey',
                  prio: 2
                },
                {
                  text: 'Buy milk',
                  prio: 1
                }
              ],
              doneTodo: [
                {
                  text: 'Sleep 8 hours',
                  prio: 2
                },
                {
                  text: 'Mentoring others',
                  prio: 1
                }
              ],
        }

        this.sort = this.sort.bind(this);
    }

    createTodo(todo){
        return (<li key={todo.text}>{todo.text}<button onclick={this.do}>"Done"</button></li>);
    }

    do(event){

        if (this.state.todo.length > 0) {
            this.state.doneTodo.push(this.state.todo.splice(event.target.id, 1)[0]);
            this.setState(this.state);
        }
    }

    createDone() {

    }
    

    sort(){
        this.setState({
            todo: this.state.todo.sort((a, b) => (a.prio >= b.prio) ? 1 : -1),
            doneTodo: this.state.doneTodo.sort((a, b) => (a.prio >= b.prio) ? 1 : -1)
        })
    }

    render(){
        return (

            <>

                <div className="todo">
                    this.state.to
                </div>

                <div className="doneTodo">


                </div>
            </>
        );
    }
}