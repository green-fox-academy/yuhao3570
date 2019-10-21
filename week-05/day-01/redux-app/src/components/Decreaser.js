import React, {useState} from 'react';
import { connect } from 'react-redux';
import { decreaseAction } from '../actions/counterActions';

function Decreaser({counter, handleDecrease}) {
    const [amount, setDecreaseAmount] = useState('');
    return (
        <div className="decreaser">
            <h2>The Decreaser</h2>
            <p>{counter}</p>
            <input value={amount} onChange={(event) => setDecreaseAmount(parseInt(event.target.value))}></input>
            <button className="decrease" onClick={() => {handleDecrease(amount || 1); setDecreaseAmount('')}}>Decrease</button>
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
        handleDecrease: (amount) => dispatch(decreaseAction(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser)