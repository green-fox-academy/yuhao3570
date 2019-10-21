import React from 'react';
import { resetAction } from '../actions/counterActions';
import { connect } from 'react-redux';

function Resetter({handleReset}) {
    return (
        <div className="resetter">
            <h2>The Resetter</h2>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(resetAction())
    }
}

export default connect(undefined, mapDispatchToProps)(Resetter);