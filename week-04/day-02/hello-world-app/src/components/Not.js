import React from 'react';

function Not({match}){
    return (
        <div>
            <p>This page {match.params.id} is not implemented yet</p>
        </div>
    )
}

export default Not;