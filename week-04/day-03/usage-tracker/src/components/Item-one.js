import React from 'react';

class ItemOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Component 1',
            timeMounted: 0,
        }
    }

    componentDidMount(){
        this.setState({timeMounted: (new Date()).getTime()})
    }

    componentWillUnmount(){
        const secondsElapsed = Math.round(((new Date()).getTime() - this.state.timeMounted) / 1000) + 's';
        this.props.addUse(this.state.name, secondsElapsed);
    }
    
    render(){
        return (
            <div>
                This is Content of Component 1!
            </div>
        );
    }
        
}

export default ItemOne;