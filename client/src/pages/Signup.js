import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import {useMutation} from '@apollo/react-hooks';
import Auth from '../utils/auth';
import {ADD_USER} from '../utils/mutations';

function Signup() {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const signupForm = async event => {
        event.preventDefault();
        const userResponse = await addUser({
            variables: {
                username: formState.username, email: formState.email, password: formState.password
            }
        });
        const token = userResponse.data.addUser.token;
        Auth.login(token);
    };

    const updatesForm = event => {
        const {name, value} = event.target;
        setFormState({
            ...formState, 
            [name]: value
        });
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={signupForm}>
                <div>
                    <label>Username:</label>
                    <input
                    placeholder='Username123'
                    name='username'
                    type='username'
                    id='username'
                    onChange={updatesForm}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    placeholder='email@emails.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={updatesForm}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    placeholder='*******'
                    name='password'
                    type='password'
                    id='password'
                    onChange={updatesForm}
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