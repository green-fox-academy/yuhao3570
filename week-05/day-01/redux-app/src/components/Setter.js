import React, { useState } from 'react';
import { setAction } from '../actions/counterActions';
import { connect } from 'react-redux';

function Setter({handleSet}){
    const [amount, setAmount] = useState('')
    return (
        <div className="setter">
            <h2>The Setter</h2>
            <input value={amount} onChange={(event) => setAmount(parseInt(event.target.value))}></input><br/>
            <button className="set" onClick={() => {handleSet(amount); setAmount('')}}>Set</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSet: (amount) => dispatch(setAction(amount))
    }
}

export default connect(undefined, mapDispatchToProps)(Setter);