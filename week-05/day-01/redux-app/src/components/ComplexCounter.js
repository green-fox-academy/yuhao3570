import React from 'react';
import { connect } from 'react-redux';

function ComplexCounter({totalCount}){
    return (
        <div className="total">
            <h2>Complex Counter</h2>
            <p>{totalCount}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalCount: state.counter + state.tags.length
    }
}

export default connect(mapStateToProps)(ComplexCounter);