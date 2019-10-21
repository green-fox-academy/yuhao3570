import React, {useState} from 'react';
import { connect } from 'react-redux';
import { increaseAction } from '../actions/counterActions';

function Increaser({ counter, handleIncrease }) {
    const [amount, setIncreaseAmount] = useState('')
    return (
        <div className="increaser">
            <h2>The Increaser</h2>
            <p>{counter}</p>
            <input value={amount} onChange={(event) => setIncreaseAmount(parseInt(event.target.value))}></input>
            <button className='increase' onClick={() => {handleIncrease(amount || 1); setIncreaseAmount('')}}>Increase</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrease: (amount) => dispatch(increaseAction(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);