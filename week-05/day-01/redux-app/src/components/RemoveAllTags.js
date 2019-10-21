import React from 'react';
import { connect } from 'react-redux';
import { removeAll } from '../actions/tagActions';

function RemoveAll({handleRemoveAll}) {
    return (
        <div className="removeAll">
            <h2>Reomve All Tags</h2>
            <button className="erase" onClick={handleRemoveAll}>Remove all tags</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemoveAll: () => dispatch(removeAll())
    }
}

export default connect(undefined, mapDispatchToProps)(RemoveAll);