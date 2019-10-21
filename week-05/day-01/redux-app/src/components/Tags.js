import React from 'react';
import { connect } from 'react-redux';

const styles = {
    article: {
        backgroundColor: 'blue',
        color: 'white',
        margin: '10px',
        padding: '5px'
    }
}

function Tags({tags}) {
    return (
        <div className="display">
            <h2>Tags</h2>
            {tags.map(tag => <article key={tag} style={styles.article}>{tag}</article>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
}

export default connect(mapStateToProps)(Tags);