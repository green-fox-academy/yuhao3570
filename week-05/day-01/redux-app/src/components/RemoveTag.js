import React from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../actions/tagActions';

const styles = {
    button: {
        backgroundColor: 'red',
        color: 'white',
        margin: '10px',
        padding: '5px'
    }
}

function RemoveTag({tags, handleRemove}) {
    return (
        <div className="remove" onClick={(event) => handleRemove(event.target.textContent)}>
            <h2>Remove Tag</h2>
            {tags.map(tag => <article key={tag} style={styles.button}>{tag}</article>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemove: (tag) => dispatch(removeTag(tag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTag);