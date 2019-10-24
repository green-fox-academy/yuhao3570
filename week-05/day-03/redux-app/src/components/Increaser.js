import React, {useState} from 'react';
import { connect } from 'react-redux';
import { increaseAction } from '../actions/counterActions';

const initState = {
    amount: '',
    delay: ''
}

function Increaser({ counter, handleDelayedIncrease }) {
    
    const [record, setState] = useState(initState);

    const {amount, delay} = record;

    const handleButtonClick = (event) => {
        event.preventDefault();

        handleDelayedIncrease(amount || 1); 
        setIncreaseAmount('');
    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        setState({
            ...record,
            [name]: parseInt(value)
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
        handleDelayedIncrease: (amount) => dispatch(increaseAction(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);