import React, {useState} from 'react';
import { connect } from 'react-redux';
import { delayIncreaseAction } from '../actions/counterActions';

const initState = {
    amount: 1,
    delay: 0
}

function Increaser({ counter, handleDelayedIncrease }) {
    
    const [record, setState] = useState(initState);

    const {amount, delay} = record;

    const handleButtonClick = (event) => {
        event.preventDefault();
        handleDelayedIncrease(amount, delay);
        setState(initState);
    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        setState({
            ...record,
            [name]: value
        })
    }

    return (
        <div className="increaser">
            <h2>The Increaser</h2>
            <p>{counter}</p>
            <label>Amount to Increase  
                <input 
                    name="amount"
                    value={amount} 
                    onChange={handleChange} 
                /><br/>
            </label>

            <label> Delay for 
                <input 
                    name="delay"
                    value={delay} 
                    onChange={handleChange} 
                /><br/>
            </label>
            <button className='increase' onClick={handleButtonClick}>Increase</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelayedIncrease: (amount, delay) => dispatch(delayIncreaseAction(amount, delay))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);