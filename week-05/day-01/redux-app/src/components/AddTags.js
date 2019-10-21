import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTag } from '../actions/tagActions';

function AddTags({handleAdd}){
    const [tagInput, setInput] = useState('');

    return (
        <div className="addTags"> 
            <h2>Add Tag</h2>
            <input value={tagInput} onChange={(event) => setInput(event.target.value)}/><br/>
            <button className="add" onClick={() => {handleAdd(tagInput); setInput('')}}>Add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (tags) => dispatch(addTag(tags))
    }
}

export default connect(undefined, mapDispatchToProps)(AddTags);