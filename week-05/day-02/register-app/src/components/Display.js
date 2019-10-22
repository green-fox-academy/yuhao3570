import { connect } from 'react-redux';
import React from 'react';

function Display({data}) {
    let {firstName, lastName, email} = data;

    return (
        <div className="detail">
            <h2>Information just Submitted</h2>
            <ul>
                <li>FirstName: {firstName}</li>
                <li>LastName: {lastName}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(Display);