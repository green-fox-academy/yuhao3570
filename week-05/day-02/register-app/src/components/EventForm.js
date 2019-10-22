import React, {useState} from 'react';
import { connect } from 'react-redux';

function EventForm({submit}) {
    const [data, setData] = useState({firstName:'', lastName:'', email:''});
    let {firstName, lastName, email} = data;

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form name="eventForm" onSubmit={(event) => {event.preventDefault(); submit(data)}}>
            <input 
                name="firstName" 
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleChange}
            />
            <input 
                name="lastName" 
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleChange}            
            />
            <input 
                name="email" 
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={handleChange}            
            />
            <button>Submit</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (data) => dispatch({type: 'SUBMIT', value: data})
    }
}

export default connect(undefined, mapDispatchToProps)(EventForm);