import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import {useMutation} from '@apollo/react-hooks';
import Auth from '../utils/auth';
import {SIGNUP_USER} from '../utils/mutations';

function Signup() {
    const [initialState, setState] = useState({ email: '', password: ''});
    const [signupUser] = useMutation(SIGNUP_USER);

    const signupForm = async event => {
        event.preventDefault();
        const userResponse = await signupUser({
            variables: {
                username: initialState.username, email: initialState.email, password: initialState.password
            }
        });
        const token = userResponse.data.addUser.token;
        Auth.login(token);
    };

    const submitForm = event => {
        const {name, value} = event.target;
        setState({
            ...initialState, 
            [name]: value
        });
    };

    return (
        <div>
           <Link to="/Signup"> <h2>Signup</h2> </Link>
            <form onSubmit={signupForm}>
                <div>
                    <label>Username:</label>
                    <input
                    placeholder='Enter Username'
                    name='username'
                    type='username'
                    id='username'
                    onChange={submitForm}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    placeholder='Enter email@emails.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={submitForm}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    placeholder='Password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={submitForm}
                    />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;