import React from 'react';
import {Route, Link} from 'react-router-dom';

function Theme(){
    return (
        <div className='theme'>
            <Link to='/'>Default</Link>
            <Link to='/theme/superman'>Superman</Link>
            <Link to='/theme/batman'>Batman</Link>
        </div>
    );
}

export default Theme;