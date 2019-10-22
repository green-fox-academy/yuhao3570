import React, {useState} from 'react';
import { connect } from 'react-redux';

function RegisterForm({submit}) {
    const initState = {
        userName: '',
        email: '',
        password: '',
        nameError: '',
        emailError: '',
        passwordError: ''
    };

    const [data, setData] = useState(initState);
    let {userName, email, password, nameError, emailError, passwordError} = data;

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isValid()) {
            console.log({userName, email, password});
            submit({userName, email, password});
            setData(initState);
        }
    }

    const handleBlur = (event) => {
        checkInput(event.target.name, event.target.value);
    }

    const checkInput = (type, value) => {        
        if(type === 'userName'){
            nameError = (value.length <= 0) ? 'Username can not be empty': ''
        }
        

        if(type === 'email'){
            emailError = value.includes('@') ? '' : 'Invalid email address'
        }

        if(type === 'password'){
            passwordError = (value.length < 8) ? 'password must be at least 8 characters long' : ''
        }

        setData({
            ...data,
            nameError,
            emailError,
            passwordError
        });
    }

    const isValid = () => {
        return (userName.length > 0 && email.includes('@') && password.length >= 8);
    }

    return (
        <form name="registerForm" onSubmit={handleSubmit}>
            <div>
                <input 
                    name="userName" 
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
                {nameError}
            </div>

            <div>
                <input 
                    name="email" 
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}

                />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
                {emailError}
            </div>

            <div>
                <input 
                    name="password" 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}

                />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
                {passwordError}
            </div>
           
            <button disabled={!isValid()}>Register</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (data) => dispatch({type: 'SUBMIT', value: data})
    }
}

export default connect(undefined, mapDispatchToProps)(RegisterForm);