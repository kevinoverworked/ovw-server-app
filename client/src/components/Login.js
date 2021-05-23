import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
 
function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    
    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:5000/users/signin', { username: username.value, password: password.value }).then(response => {
            console.log("no issues");
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dashboard');
        }).catch(error => {
            setLoading(false);
            if (error.response && error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <form>
            <fieldset>
                <label>Username</label>
                <input type="text" name="username" {...username} autoComplete="new-password" />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input type="password" name="password" {...password} autoComplete="new-password" />
            </fieldset>
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
            {error && <small style={{color: 'red'}}>{error}</small>}
        </form>
        
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
   
  export default Login;