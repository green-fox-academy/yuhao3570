import React from 'react';

function ErrorCode({match}) {
    return (
        <div>
            <p>Error: {match.params.id}</p>
        </div>
    )
}

export default ErrorCode;